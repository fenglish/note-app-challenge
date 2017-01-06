note = {};
note._text = function() {
  return "A really cool note!";
};

(function testNoteListContainsNote() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList._notes[0] === note, testNoteListContainsNote.name);
})();

(function testReturnListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList.showNotes().includes(note), testReturnListOfNotes.name);
})();

(function testCreateNote() {
  var noteList = new NoteList();
  noteList.createNote("it's dark outside");
  assert.isTrue(noteList.showNotes()[0].returnNoteText() === "it's dark outside", testCreateNote.name);
})();

(function testCreateNoteWithId(){
  var noteList = new NoteList;
  noteList.createNote("test1");
  noteList.createNote("test2");
  assert.isTrue(noteList.showNotes()[1].returnId() === 1, testCreateNoteWithId.name);
})();
