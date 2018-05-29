console.log('starting note.js');
const fs = require('fs');


const addNote = (title, body) => {
    let notes = []
    const note = {
        title: title,
        body: body
    };
    if (!fs.existsSync('./notes-data.json')){
        fs.writeFileSync('notes-data.json', '[]');
    } 
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString)
    notes.push(note)
    const noteToString = JSON.stringify(notes);
    fs.writeFileSync('notes-data.json', noteToString);
    console.log('Item added: ', `title: ${title}`, `body: ${body}`);
    
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