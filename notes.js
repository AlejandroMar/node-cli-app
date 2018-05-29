console.log('starting note.js');
const fs = require('fs');

const fetchedNotes = () => {
    if (!fs.existsSync('./notes-data.json')) {
        fs.writeFileSync('notes-data.json', '[]');
    }
   return JSON.parse(fs.readFileSync('notes-data.json'));
};

const saveNotes = (notesArr) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArr));
}


//ADD NOTES FUNCTION
const addNote = (title, body) => {

    const notes = fetchedNotes();

    const note = {
        title: title,
        body: body
    };
   

    const duplicateNotes = notes.filter(note => note.title === title);
        
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};

const getAll = () => {
    console.log('Listing all tasks');
};

const getNote = (title, body) => {
    console.log('reading node: ', title, body);

};

const removeNote = (title, body) => {
    console.log('removing note: ', title);
}


//it's very important to export the functions and functionality that I need in other modules
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}