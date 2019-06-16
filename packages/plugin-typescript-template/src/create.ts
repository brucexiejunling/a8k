import logger from '@a8k/cli-utils/logger';
import { join } from 'path';
import semver from 'semver';
import Generator from 'yeoman-generator';

const toArray = (a: string | string[]) => {
  return Array.isArray(a) ? a : [a];
};

class CreateGenerator extends Generator {
  [x: string]: any;
  name: string;
  props: any;
  constructor(args, opts = {}) {
    super(args, opts);
    this.name = args.name;
    this.props = { name: this.name };
    this.sourceRoot(join(__dirname, '../template/'));
  }

  private copyFiles(files = []) {
    files.forEach(([src, dest]) => {
      src = toArray(src);
      dest = toArray(dest);
      this.fs.copy(this.templatePath(...src), this.destinationPath(...dest));
    });
  }

  private copyTpls(files = []) {
    files.forEach(([src, dest]) => {
      src = toArray(src);
      dest = toArray(dest);
      this.fs.copyTpl(this.templatePath(...src), this.destinationPath(...dest), this.props);
    });
  }

  // tslint:disable-next-line: member-ordering
  public writing() {
    // files
    this.copyFiles([
      ['common/_gitignore', '.gitignore'],
      ['common/.commitlintrc.js', '.commitlintrc.js'],
      ['common/.editorconfig', '.editorconfig'],
      ['common/.gitmessage', '.gitmessage'],
      ['common/.prettierrc', '.prettierrc'],
      ['common/tsconfig.json', 'tsconfig.json'],
      ['common/tslint.json', 'tslint.json'],
      ['src/', 'src/'],
    ]);

    // tpl
    this.copyTpls([['common/package', 'package.json'], ['common/README.md', 'README.md']]);
  }
}

export default (projectDir: string, name: string) => {
  if (!semver.satisfies(process.version, '>= 8.0.0')) {
    logger.error('✘ The generator will only work with Node v8.0.0 and up!');
    process.exit(1);
  }
  return new Promise(resolve => {
    new CreateGenerator({
      name,
      env: { cwd: projectDir },
      resolved: __filename,
    }).run(resolve);
  });
};
