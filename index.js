const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const ssm = require('./lib/ssm');
const inquirer = require('./lib/inquirer');


clear();

console.log(
  chalk.yellow(
    figlet.textSync('QU4RTET AWS VALIDATION', { horizontalLayout: 'full',color:'#00FF00' })
  )
);

const run = async () => {

    const paramGroup = await inquirer.askForParamaterGroup();
    console.log(paramGroup);
    ssm(
        paramGroup.paramGroup
    );
};
  
run();