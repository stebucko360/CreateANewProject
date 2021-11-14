const fs = require('fs/promises');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'Enter project name:',
        default: 'new_project',
    }
];

function projectGenerator() {

    inquirer.prompt(questions).then((response)=>{
        fs.mkdir(`${response.project}`)
        return response;
    }).then((response)=>{
        fs.writeFile(`${response.project}/index.js`,'');
        fs.writeFile(`${response.project}/.gitignore`,'node_modules');
        fs.writeFile(`${response.project}/README.md`,`${response.project}`);
        fs.writeFile(`${response.project}/.git`,``);
        fs.writeFile(`${response.project}/package.json`,``);
        fs.mkdir(`${response.project}/spec`)
        return response;
    }).then((response)=>{
        fs.writeFile(`${response.project}/spec/index.test.js`,'');
        console.log('Project created successfully')
    }).catch((err)=>{console.log(err)});
    


}

projectGenerator();

module.exports = projectGenerator;