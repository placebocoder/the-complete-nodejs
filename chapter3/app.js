const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
//

fs.appendFileSync('notes.txt', '\nAdd this text at 2nd line.')
fs.appendFileSync('notes.txt', '\nAdd more text at 3rd line.')
