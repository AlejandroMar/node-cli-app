console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

//console.log(argv);

const command = argv._[0];



if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note added');
        notes.logNote(note)
    }else {
        console.log('The note already exist'); 
    }
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
   if(note){
    console.log('Note found');
    notes.logNote(note) 
   }else{
       console.log('Note not found');
   }
    
} else if (command === 'remove') {
    const removedNote = notes.removeNote(argv.title);
    const msg = removedNote ? `Note: ${argv.title}, was removed` : `No items were removed, note: ${argv.title} not found`;
    console.log(msg);
} else if (command === undefined) {
    console.log('please write an argument');
} else {
    console.log('command not found');
}
