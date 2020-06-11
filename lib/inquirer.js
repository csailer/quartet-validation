const inquirer = require('inquirer');

module.exports = {
  askForParamaterGroup: () => {
    const questions = [
      {
        name: 'paramGroup',
        type: 'input',
        message: 'Which Parameter Group? (e.g. CUSTOMER_QA or CUSTOMER):',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a Parameter Group.';
          }
        }
      },
    ];
    return inquirer.prompt(questions);
  },
  selectAWSService: () => {
    const questions = [
      {
        name: 'awsService',
        type: 'list',
        message: 'Which AWS Service?',
        choices: ['ssm', 'ec2'],
        filter: function(val) {
          return val;
        }
      },
    ];
    return inquirer.prompt(questions);
  }
};
