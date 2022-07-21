const fs = require("fs")
const inquirer = require("inquirer")

const questions = [
    {
    type: 'input',
    message: 'What is your Team Manager\'s name? ',
    name: 'nameTM'
    },
    {
    type: 'input',
    message: 'What is your Team Manager\'s employee ID: ',
    name: 'idTM'
    },
    {
    type: 'input',
    message: 'What is your Team Manager\'s email? ',
    name: 'tmEmail'
    },
    {
    type: 'input',
    message: 'What is your Team Manager\'s office number? ',
    name: 'tmOffice',
    },
    {
    type: 'list',
    message: 'Add another Team Member?',
    choices: ['Engineer', 'Intern', 'Finished Team'],
    name: 'listChoice'
    }
]