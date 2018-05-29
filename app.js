console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

//console.log(argv);

const command = argv._[0];



if (command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title, argv.body);
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else if (command === undefined) {
    console.log('please write an argument');
} else {
    console.log('command not found');
}
