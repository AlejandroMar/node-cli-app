console.log('starting note.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);  
};

const getAll = () => {
    console.log('Listing all tasks');
};

const getNote = (title, body) => {
    console.log('reading node: ', title, body);
    
};

const removeNote = (title, body) => {
    console.log('removing note: ', title);
};


//it's very important to export the functions and functionality that I need in other modules
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}