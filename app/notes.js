const fs = require('fs');
const path = require('path');
const notePath = path.join(__dirname, 'notes.json');

/**
 *
 * function add new note into json file
 * @param {String} title
 * @param {String} body
 */
function addNote(title, body) {
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
  fs.existsSync(notePath) || fs.writeFileSync(notePath, JSON.stringify([]));
  const content = fs.readFileSync(notePath, 'utf-8');
  return JSON.parse(content);
};

/**
 *
 * function writes notes in json file
 * @param {Object} content
 */
function writeNotes(content) {
  fs.writeFileSync(notePath, JSON.stringify(content));
};

/**
 * function get all notes from json and show them on console
 *
 */
function listNotes() {
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

/**
 *
 * function read note by title from json and show it on console
 * @param {String} title
 */
function readNote(title) {
  const notes = readNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`Note "${title}" : "${note.body}"`);
  } else {
    console.log(`Note "${title}" is not existed`);
  }
};

/**
 *
 * function delete note by title from json
 * @param {String} title
 */
function deleteNote(title) {
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

/**
 *
 * function edit note in json
 * @param {String} title
 * @param {String} body
 */
function editNote(title, body) {
  const notes = readNotes();
  const isExists = notes.find((note) => note.title === title);
  if (isExists) {
    const editedNote = notes.find((note) => note.title === title);
    editedNote.body = body;
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


