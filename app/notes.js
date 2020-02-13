const fs = require('fs');
const path = require('path');
const notePath = path.join(__dirname, 'notes.json');

const addNote = (title, body) => {
  const notes = readNotes();
  const isDublicated = notes.find((note) => note.title === title);
  if (isDublicated) {
    console.log('Note is already existed');
  } else {
    notes.push({title, body});
    writeNotes(notes);
    console.log('Note added');
  }
};


/**
 *
 * function retrieves all notes from json file
 * @return {String}
 */
function readNotes() {
  try {
    const content = fs.readFileSync(notePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * function writes notes in json file
 * @param {Object} content
 */
function writeNotes(content) {
  try {
    fs.writeFileSync(notePath, JSON.stringify(content));
  } catch (error) {
    console.log(error);
  }
};

const listNotes = () => {
  const notes = readNotes();
  if (notes.length) {
    console.log('List of notes:');
    notes.forEach((note) => {
      console.log(note);
    });
  } else {
    console.log('There are not notes yet');
  }
};

const readNote = (title) => {
  const notes = readNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`Note "${title}" : "${note.body}"`);
  } else {
    console.log(`Note "${title}" is not existed`);
  }
};

const deleteNote = (title) => {
  const notes = readNotes();
  const isExists = notes.find((note) => note.title === title);
  if (isExists) {
    const updatedNotes = notes.filter((note) => note.title !== title);
    writeNotes(updatedNotes);
    console.log(`Note "${title}" is deleted`);
  } else {
    console.log(`Note "${title}" is not existed`);
  }
};

const editNote = (title, body) => {
  const notes = readNotes();
  const isExists = notes.find((note) => note.title === title);
  if (isExists) {
    const editednote = notes.find((note) => note.title === title);
    editednote.body = body;
    writeNotes(notes);
    console.log(`Note "${title}" is edited`);
  } else {
    console.log(`Note "${title}" is not existed`);
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,
  deleteNote,
  editNote,
};


