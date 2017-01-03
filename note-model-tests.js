var assert;
var noteText1 = "My favourite language is JavaScript";
var noteText2 = "My favourite language is Ruby";

function testNoteInstantiatedWithText() {
  var note = new Note(noteText1);
  assert.isTrue( note.getText() === noteText1 )
}

function testListHasArray() {
  var list = new List();
  assert.isTrue( list.getNotes() instanceof Array )
}

function testListStoredNotes() {
  var note1 = new Note(noteText1);
  var note2 = new Note(noteText2);
  var list = new List();
  list.addNote(note1);
  list.addNote(note2);
  assert.isTrue( list.getNotes().includes(note1, note2) );
}

function testListCreatesAndStoresNote() {
  var list = new List();
  list.createNote(noteText1)
  var note = list.notes[0]
  assert.isTrue( note.getText() === noteText1 )
}

testNoteInstantiatedWithText();
testListHasArray();
testListStoredNotes();
testListCreatesAndStoresNote()
