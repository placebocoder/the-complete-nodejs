// console.log(process.argv)

const command = process.argv[2]

if (command == 'add') {
    console.log('Adding note!')
} else if(command == 'remove') {
    console.log('Removing note!')
}

// console.log('---------------------')

const yargs = require('yargs')

yargs.version('1.0.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }    
    },
    handler: function(argv) { 
        console.log('Title: ', argv.title)  
        console.log('Body: ', argv.body)  
    }
})

// Create add remove
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() { console.log('Removing a new note!')  }
})

// Create add read
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() { console.log('Reading a note!')  }
})

// Create add list
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function() { console.log('Listing notes!')  }
})

yargs.parse()

//console.log(yargs.argv)