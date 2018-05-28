console.log('starting note.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);  
};

const getAll = () => {
    console.log('Listing all tasks');
};

const readNote = (title, body) => {
    console.log('reading node: ', title, body);
    
};

const removeNote = (title, body) => {
    console.log('removing note: ', title, body);
};



module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}