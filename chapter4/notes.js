const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {

}

const addNode = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // console.log(duplicateNote)
    // console.log(title)

    // debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('added new note'))
    } else {
        console.log(chalk.red.inverse('duplicated note'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
        
}

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length) {        
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const listNote = () => loadNotes().forEach(note => console.log(note.title))

module.exports = {
    getNotes: getNotes,
    addNode: addNode,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote

}
