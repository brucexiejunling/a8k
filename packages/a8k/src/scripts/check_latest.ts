import getNpmCommand from '@a8k/cli-utils/npm';
import 'colors';

const { execSync } = require('child_process');
const semver = require('semver');
const fs = require('fs');
const moment = require('moment');
const { configPath } = require('../const');

const { name, version } = require('../../package.json');

const args = [];
const todayStr = moment().format('YYYY-MM-DD');

// START 检查是否需要检查更新
let config;
let needCheck = true;
try {
  config = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(config);
  if (config.updateDate === todayStr && config.needUpdate === false) {
    needCheck = false;
  }
} catch (e) {
  // 文件不存在
}
if (needCheck) {
  config = config || {};
  // END 检查是否需要检查更新

  const cmd = getNpmCommand();
  const latestVersion = execSync(`${cmd} info ${name} version ${args.join(' ')} --nochecklatest`)
    .toString()
    .trim();
  const needUpdate = semver.neq(latestVersion, version);
  if (needUpdate) {
    console.log(
      `目前最新版本的 ${name} 为：${latestVersion.green}, 你的当前版本为：${version.red}`
    );
    console.log(`升级命令：\`$ ${`${cmd} install -g ${name}`.green}\``);
    console.log();
  }
  config.updateDate = todayStr;
  config.needUpdate = needUpdate;
  // 写回缓存
  fs.writeFileSync(configPath, JSON.stringify(config));
}
