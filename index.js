const yargs = require('yargs');
const notes = require('./app/notes');

yargs.command({
  command: 'create',
  describe: 'add a new note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      description: 'note name',
    },
    body: {
      type: 'string',
      demandOption: true,
      description: 'note text',
    },
  },
  handler(args) {
    notes.addNote(args.title, args.body);
  },
});

yargs.command({
  command: 'list',
  describe: 'show notes',
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'read note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      description: 'read note',
    },
  },
  handler(args) {
    notes.readNote(args.title);
  },
});

yargs.command({
  command: 'delete',
  describe: 'delete note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      description: 'delete name',
    },
  },
  handler(args) {
    notes.deleteNote(args.title);
  },
});

yargs.command({
  command: 'edit',
  describe: 'edit note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      description: 'edit name',
    },
    body: {
      type: 'string',
      demandOption: true,
      description: 'note text',
    },
  },
  handler(args) {
    notes.editNote(args.title, args.body);
  },
});

yargs.parse();
