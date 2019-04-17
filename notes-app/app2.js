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