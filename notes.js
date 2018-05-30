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

const getNote = (title) => {
    let notes = fetchedNotes();
    filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0]
};

const removeNote = (title, body) => {
    let notes = fetchedNotes();
    filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes)
    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log('----');
    console.log( `Note title: ${note.title}`);
    console.log(`Note body: ${note.body}`);  
};

//it's very important to export the functions and functionality that I need in other modules
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}