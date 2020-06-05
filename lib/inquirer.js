const inquirer = require('inquirer');

module.exports = {
  askForParamaterGroup: () => {
    const questions = [
      {
        name: 'paramGroup',
        type: 'input',
        message: 'Which Parameter Group? ( Case Sensitive e.g. CUSTOMER_QA or CUSTOMER):',
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
};
