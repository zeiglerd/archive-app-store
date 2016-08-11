const chalk = require('chalk');
const fs = require('fs');

module.exports = {

  // Check that n is a number
  'isNumber': (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  'log': (msg, obj = {}, level) => {
    if (process.env.DEBUG) {
      let date = new Date(),
          d = date.getDate(),
          m = date.getMonth() + 1,
          y = date.getFullYear();
      console.log();
      console.log(chalk.bgBlue(chalk.dim(date)));
      console.log(chalk.bgRed(chalk.bold(msg)));
      console.log(chalk.bgYellow(chalk.black(JSON.stringify(obj, null, 2))));
      console.log();

      // Log to file
      let pretty = date + '\n' + msg + '\n' + JSON.stringify(obj, null, 2) + '\n\n';
      fs.appendFile('logs/log.txt', pretty, (err) => {
        if (err) {
          console.log(chalk.red(err));
        }
      });

    }
  }

};
