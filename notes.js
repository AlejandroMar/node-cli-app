console.log('starting note.js');
const fs = require('fs');

//ADD NOTES FUNCTION
const addNote = (title, body) => {
    const note = {
        title: title,
        body: body
    };
    if (!fs.existsSync('./notes-data.json')) {
        fs.writeFileSync('notes-data.json', '[]');
    }
    const fetchedNotes = JSON.parse(fs.readFileSync('notes-data.json'));

    const duplicateNotes = fetchedNotes.filter(note => note.title === title)
        
    if (duplicateNotes.length === 0) {
        fetchedNotes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(fetchedNotes));
        console.log('Item added: ', `title: ${title}`, `body: ${body}`);
    } else {
        console.log('the note already exist');
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