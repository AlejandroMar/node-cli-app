
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//personal modules
const notes = require('./notes');

const argv = yargs
    .command('add', 'Add new note', {
        title:{
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body:{
            describe: `Note's description`,
            demand:true,
            alias: 'b'
        }
    })
    .help()
    .argv;

const command = argv._[0];



if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added');
        notes.logNote(note)
    } else {
        console.log('The note already exist');
    }
} else if (command === 'list') {
    //I most not give the same name to the variable as to the method;
    const allNotes = notes.getAll()
    if (allNotes) {
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach(note => {
            notes.logNote(note)
        });
    } else {
        console.log('There are no notes');
    }
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note)
    } else {
        console.log('Note not found');
    }

} else if (command === 'remove') {
    const removedNote = notes.removeNote(argv.title);
    const msg = removedNote ? `Note: ${argv.title}, was removed` : `No items were removed, note: ${argv.title} not found`;
    console.log(msg);
} else if (command === undefined) {
    console.log('Please write an argument');
} else {
    console.log('Command not found');
}
