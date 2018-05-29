const fs = require('fs');

const originalNote = {
    title:'Some Title',
    body: 'Some body'
};

//original note to string

const originalNoteToString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteToString);

const noteString = fs.readFileSync('notes.json');
//note
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

