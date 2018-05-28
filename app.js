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
} else if(command === 'list'){
    notes.getAll()
}else if(command === 'read'){
    notes.readNote(argv.title, argv.body);
}else if(command === 'remove'){
    notes.removeNote(argv.title, argv.body)
}else if(command === undefined){
    console.log('please write an argument');
}else{
    console.log('command not found');
    
} 
 