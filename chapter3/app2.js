const add = require('./utils.js')
const sum = add(4, 1)
console.log(sum)


// 
// Challenge: Define and use a function in a new file
// 
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Yours notes..."
// 3. Export getNotes function
// 4. From app.js, load in adnd call the function priting message 
const notes = require('./notes.js')
console.log(notes())

const validator = require('validator')

console.log(validator.isEmail('asdf@email.com'))

console.log(validator.isURL('https:/url.io'))


// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app2.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
// 

const chalk = require('chalk')
const log = console.log

log(chalk.green('Success!'));
log(chalk.red.underline.inverse('Underline success!'));
log(chalk.blue.inverse('Failure!'));

