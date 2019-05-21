import formatWebpackMessages from '@a8k/dev-utils/formatWebpackMessages';
import chalk from 'chalk';

/**
 * @typedef {Object} Options
 * @property {Boolean} silent
 */

class ReportStatusPlugin {
  options: any;

  /**
   *Creates an instance of ReportStatusPlugin.
   * @param {Options} options
   * @memberof ReportStatusPlugin
   */
  constructor(options) {
    this.options = { ...options };
  }

  apply(compiler) {
    const { options } = this;
    compiler.hooks.done.tap('report-status', async stats => {
      if (stats.hasErrors()) {
        console.log(chalk.red.bold('Failed to compile:\n'));
        process.exitCode = 1;
      }
      if (stats.hasErrors() || stats.hasWarnings()) {
        const messages = formatWebpackMessages(stats.toJson());
        // eslint-disable-next-line
        for (const error of messages.errors) {
          console.log(error);
        }
        if (!options.silent) {
          // eslint-disable-next-line
          for (const warning of messages.warnings) {
            console.log(warning);
          }
        }
      }
    });
  }
}

module.exports = ReportStatusPlugin;
