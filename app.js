console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

//console.log(argv);

const command = process.argv[2]


//console.log('Command: ', argv);

 if(command === 'add'){
    notes.addNote(argv.title, argv.body)
}/* else if(command === 'list'){
    console.log('listing all notes');
}else if(command === 'read'){
    console.log('reading note');
}else if(command === 'remove'){
    console.log('removing note');
}else if(command === undefined){
    console.log('please write an argument');
}else{
    console.log('command not found');
    
} 
 */
