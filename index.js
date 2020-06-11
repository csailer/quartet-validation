#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const ssm = require('./lib/ssm');
const ec2 = require('./lib/ec2');
const inquirer = require('./lib/inquirer');
const colors = require('colors');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('QU4RTET AWS VALIDATION', { horizontalLayout: 'full',color:'#00FF00' })
  )
);

const run = async () => {
    const arg = await inquirer.selectAWSService();
    
    switch(arg.awsService){
      case 'ssm':{
          const paramGroup = await inquirer.askForParamaterGroup();
          ssm(paramGroup.paramGroup.toUpperCase());
          break;
      }
      case 'ec2':{
        const amis = ec2();
        console.log(amis);
        break;
      }
    }
   
};
  
run();