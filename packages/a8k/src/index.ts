import loadConfig from '@a8k/cli-utils/load-config';
import logger from '@a8k/cli-utils/logger';
import spinner from '@a8k/cli-utils/spinner';
import program, { Command } from 'commander';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import { merge } from 'lodash';
import path from 'path';
import resolveFrom from 'resolve-from';
import { BUILD_ENV, BUILD_TYPE } from './const';
import defaultConfig from './default-config';
import Hooks from './hooks';
import { A8kConfig, A8kOptions, Internals, IResolveWebpackConfigOptions } from './interface';
import loadPkg from './utils/load-pkg';
import loadPlugins from './utils/load-plugins';

const { version } = require('../package.json');

program.version(version);

program.option('--nochecklatest', '不检测最新版本');
program.option('--debug', '输出构建调试信息');
program.on('command:*', () => {
  logger.error(
    `Invalid command: ${program.args.join(' ')}\nSee --help for a list of available commands.`,
  );
  process.exit(1);
});

export default class A8k {
  public options: A8kOptions;
  public config: A8kConfig;
  public hooks = new Hooks();
  public commands = new Map();
  public logger = logger;
  public cli = program;
  public internals: Internals;
  public buildId: string;
  public pkg: any;
  public configFilePath: string;
  public plugins: any[] = [];
  private inspectWebpackConfigPath: string;
  private createProjectCommandTypes: Array<{
    type: string;
    description: string;
    action: (options: any) => void;
  }> = [];
  private createPageCommand: Array<{
    type: string;
    description: string;
    action: (options: any) => void;
  }> = [];
  private createComponentCommand: Array<{
    type: string;
    description: string;
    action: (options: any) => void;
  }> = [];
  constructor(options: A8kOptions) {
    this.options = {
      cliPath: path.resolve(__dirname, '../'),
      cliArgs: process.argv,
      baseDir: path.resolve('.'),
    } as A8kOptions;
    if (options) {
      this.options = { ...this.options, ...options };
      const { baseDir } = options;
      if (baseDir) {
        this.options.baseDir = path.resolve(baseDir);
      }
    }
    const { baseDir, debug } = this.options;
    logger.setOptions({
      debug,
    });
    this.config = {} as A8kConfig;

    this.internals = {
      mode: BUILD_ENV.DEVELOPMENT,
    };

    this.buildId = Math.random()
      .toString(36)
      .substring(7);
    this.pkg = loadPkg({ cwd: baseDir });

    this.initConfig();

    // 客户端定制webpack配置
    if (this.config.chainWebpack) {
      this.hooks.add('chainWebpack', this.config.chainWebpack);
    }
  }
  public initConfig() {
    const { baseDir, configFile } = this.options;
    const res = loadConfig.loadSync({
      files:
        typeof configFile === 'string'
          ? [configFile]
          : ['a8k.config.js', 'imtrc.js', 'package.json'],
      cwd: baseDir,
      packageKey: 'a8k',
    });
    if (res.path) {
      this.configFilePath = res.path;
      this.config = merge(res.data, this.config);
      logger.debug(`a8k config file: ${this.configFilePath}`);
    } else {
      logger.debug('a8k is not using any config file');
    }
    this.config = merge(defaultConfig, this.config);

    // 构建输出文件根目录
    this.config.dist = this.resolve(this.config.dist);
    // 页面根目录
    this.config.pagesDir = this.resolve(this.config.pagesDir);
    // html模板路径
    this.config.template = this.resolve(this.config.template);
    // 缓存基础目录
    this.config.cacheBase = path.resolve(this.config.cache);
    // 缓存版本标记
    this.config.cache = path.resolve(this.config.cache, `v-${version}`);
    // ssr配置
    this.config.ssrConfig.dist = this.resolve(this.config.ssrConfig.dist);
    this.config.ssrConfig.view = this.resolve(this.config.ssrConfig.view);

    if (process.env.HOST) {
      this.config.devServer.host = process.env.HOST;
    }
    if (process.env.PORT) {
      this.config.devServer.port = Number(process.env.PORT);
    }
    this.config.envs = { ...this.config.envs, ...this.loadEnvs() };
  }
  public hook(name: string, fn: Function) {
    return this.hooks.add(name, fn);
  }

  public resolve(...args: string[]) {
    return path.resolve(this.options.baseDir, ...args);
  }

  public rootResolve(...args: string[]) {
    return path.resolve(this.options.cliPath, ...args);
  }

  // 准备工作
  public prepare() {
    this.registerCommand('create [dir] [type]')
      .description('create project')
      .action(async (dir, type) => {
        const projectDir = path.join(this.options.baseDir, dir || '');
        let exist = false;
        try {
          await fs.stat(projectDir);
          exist = true;
        } catch (e) {}
        const files = exist ? await fs.readdir(projectDir) : [];
        if (files.length) {
          const answer = await inquirer.prompt([
            {
              type: 'confirm',
              name: 'continue',
              message: 'current directory not empty, continue?',
              default: false,
            },
          ]);
          if (!answer.continue) {
            process.exit(0);
          }
        }
        if (!type) {
          const prompts = [
            {
              // tslint:disable-next-line: no-shadowed-variable
              choices: this.createProjectCommandTypes.map(({ type, description }) => {
                return { name: description, value: type };
              }),
              message: 'select you want create project type',
              name: 'type',
              type: 'list',
            },
          ];
          const result = await inquirer.prompt(prompts);
          type = result.type;
        }
        let name = path.basename(projectDir);
        const prompt = [
          {
            type: 'input',
            name: 'name',
            validate(input: string) {
              // Declare function as asynchronous, and save the done callback
              const done = this.async();

              if (input !== '' && /^[a-z@A-Z]/.test(input)) {
                done(null, true);
              } else {
                done('Project name must begin with a letter or @');
              }
            },
            message: 'Input project name',
            default: name,
          },
        ];
        ({ name } = await inquirer.prompt(prompt));
        const createConfig = {
          name,
          projectDir,
          type,
        };
        const commandType = this.createProjectCommandTypes.find(({ type: c }) => c === type);
        if (!commandType) {
          logger.error(`create "${type}" not support`);
          process.exit(-1);
        }
        spinner.info(commandType.description);
        fs.ensureDir(projectDir);
        commandType.action(createConfig);
      });
    this.registerCommand('page')
      .alias('p')
      .description('create page from template')
      .action(async () => {
        if (!this.config.type) {
          logger.warn('you project not support this command');
          return;
        }
        const command = this.createPageCommand.find(({ type }) => type === this.config.type);
        if (command) {
          command.action({});
        } else {
          logger.warn('you project(type is ' + this.config.type + ') not support create page');
        }
      });
    this.registerCommand('component')
      .alias('c')
      .description('create component from template')
      .action(async () => {
        if (!this.config.type) {
          logger.warn('you project not support this command');
          return;
        }
        const command = this.createComponentCommand.find(({ type }) => type === this.config.type);
        if (command) {
          command.action({});
        } else {
          logger.warn('you project(type is ' + this.config.type + ') not support create component');
        }
      });
    this.applyPlugins();
    logger.debug('App envs', JSON.stringify(this.getEnvs(), null, 2));
  }

  public loadEnvs() {
    const { NODE_ENV } = process.env;
    const dotenvPath = this.resolve('.env');
    const dotenvFiles = [
      NODE_ENV && `${dotenvPath}.${NODE_ENV}.local`,
      NODE_ENV && `${dotenvPath}.${NODE_ENV}`,
      // Don't include `.env.local` for `test` environment
      // since normally you expect tests to produce the same
      // results for everyone
      NODE_ENV !== 'test' && `${dotenvPath}.local`,
      dotenvPath,
    ].filter(Boolean);

    let envs = {};

    dotenvFiles.forEach((dotenvFile) => {
      if (fs.existsSync(dotenvFile)) {
        logger.debug('Using env file:', dotenvFile);
        const config = require('dotenv-expand')(
          require('dotenv').config({
            path: dotenvFile,
          }),
        );
        // Collect all variables from .env file
        envs = { ...envs, ...config.parsed };
      }
    });

    // Collect those temp envs starting with a8k_ too
    for (const name of Object.keys(process.env)) {
      if (name.startsWith('a8k_')) {
        envs[name] = process.env[name];
      }
    }

    return envs;
  }

  // Get envs that will be embed in app code
  public getEnvs() {
    return Object.assign({}, this.config.envs, {
      PUBLIC_PATH: this.config.publicPath,
    });
  }

  public applyPlugins() {
    const plugins = [
      require.resolve('@a8k/plugin-react'),
      require.resolve('@a8k/plugin-typescript-template'),
      require.resolve('@a8k/plugin-sb-react'),
      require.resolve('./plugins/config-base'),
      require.resolve('./plugins/config-dev'),
      require.resolve('./plugins/config-html'),
      require.resolve('./plugins/config-ssr'),

      require.resolve('./plugins/command-build'),
      require.resolve('./plugins/command-dev'),
      require.resolve('./plugins/command-test'),
      require.resolve('./plugins/command-utils'),
      require.resolve('./plugins/command-init'),

      ...(this.config.plugins || []),
    ];

    this.plugins = loadPlugins(plugins, this.options.baseDir);

    for (const plugin of this.plugins) {
      const { resolve: Plugin, options } = plugin;
      if (Plugin instanceof Function) {
        const plugin = new Plugin(options);
        plugin.apply(this);
      } else {
        Plugin.apply(this, options);
      }
    }
  }

  // 程序入口
  public async run() {
    this.prepare();
    await this.hooks.invokePromise('beforeRun');
    this.cli.parse(this.options.cliArgs);
    if (!this.options.cliArgs.slice(2).length) {
      program.outputHelp();
    }
  }

  public resolveWebpackConfig(options: IResolveWebpackConfigOptions) {
    const WebpackChain = require('webpack-chain');
    const config = new WebpackChain();

    options = { type: BUILD_TYPE.CLIENT, ...options, mode: this.internals.mode };

    this.hooks.invoke('chainWebpack', config, options);

    if (this.config.chainWebpack) {
      this.config.chainWebpack(config, options, this);
    }

    if (this.options.inspectWebpack) {
      this.inspectWebpackConfigPath = path.join(
        require('os').tmpdir(),
        `a8k-inspect-webpack-config-${options.type}-${this.buildId}.js`,
      );
      fs.appendFileSync(
        this.inspectWebpackConfigPath,
        `//${JSON.stringify(options)}\nconst ${options.type} = ${config.toString()}\n`,
      );
      require('open')(this.inspectWebpackConfigPath);
    }

    let webpackConfig = config.toConfig();
    if (this.config.webpackOverride) {
      logger.warn('!!webpackOverride 已经废弃，请使用chainWebpack修改配置!!');
      // 兼容旧版本imt
      const legacyOptions = {
        type: options.type === BUILD_TYPE.CLIENT ? options.mode : 'server',
      };
      const modifyConfig = this.config.webpackOverride(webpackConfig, legacyOptions);
      if (modifyConfig) {
        webpackConfig = modifyConfig;
      }
    }
    return webpackConfig;
  }

  public createWebpackCompiler(webpackConfig) {
    return require('webpack')(webpackConfig);
  }

  public async runWebpack(webpackConfig) {
    const compiler = this.createWebpackCompiler(webpackConfig);
    await new Promise((resolve, reject) => {
      compiler.run((err: Error, stats: any) => {
        if (err) {
          return reject(err);
        }
        resolve(stats);
      });
    });
  }

  public async runCompiler(compiler) {
    await new Promise((resolve, reject) => {
      compiler.run((err: Error, stats: any) => {
        if (err) {
          return reject(err);
        }
        resolve(stats);
      });
    });
  }

  public hasDependency(name: string, type = 'all') {
    const prodDeps = Object.keys(this.pkg.data.dependencies || {});
    const devDeps = Object.keys(this.pkg.data.devDependencies || {});
    if (type === 'all') {
      return prodDeps.concat(devDeps).includes(name);
    }
    if (type === 'prod') {
      return prodDeps.includes(name);
    }
    if (type === 'dev') {
      return devDeps.includes(name);
    }
    throw new Error(`Unknow dep type: ${type}`);
  }

  public registerCommand(command: string): Command {
    return this.cli.command(command);
  }
  public registerCreateType(type: string, description: string, action: () => void): A8k {
    this.createProjectCommandTypes.push({ type, description, action });
    return this;
  }
  public registerPageType(type: string, description: string, action): A8k {
    this.createPageCommand.push({ type, description, action });
    return this;
  }
  public registerComponentType(type: string, description: string, action): A8k {
    this.createComponentCommand.push({ type, description, action });
    return this;
  }

  public hasPlugin(name: string) {
    return this.plugins && this.plugins.find((plugin) => plugin.resolve.name === name);
  }

  public removePlugin(name: string) {
    this.plugins = this.plugins.filter((plugin) => plugin.resolve.name !== name);
    return this;
  }

  public chainWebpack(fn: Function) {
    this.hooks.add('chainWebpack', fn);
    return this;
  }

  public localResolve(id: string, fallbackDir: string) {
    let resolved = resolveFrom.silent(this.resolve(), id);
    if (!resolved && fallbackDir) {
      resolved = resolveFrom.silent(fallbackDir, id);
    }
    return resolved;
  }

  public localRequire(id: string, fallbackDir: string) {
    const resolved = this.localResolve(id, fallbackDir);
    return resolved && require(resolved);
  }
}
