import inquirer from 'inquirer';

function write(text) {
    process.stdout.write(text);
}


inquirer
  .prompt([
    {type:'input', name:'name', message: 'What is your name?'},
    {
        type:'list',
        name:'gender',
        message: 'What is your gender?',
        choices: ['male', 'female', 'bigender', 'apache helicopter', 'other']
    },
    {
        type:'checkbox',
        name:'genders',
        message: 'What is your genders?',
        choices: [
            {value:'male', checked: true},
            'female',
            'bigender',
            'apache helicopter',
            'other'
        ]
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});