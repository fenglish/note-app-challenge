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
  var note = new Note(noteText1);
  var list = new List();
  list.addNote(note)
  assert.isTrue( list.getNotes().includes(note) )
}

testNoteInstantiatedWithText();
testListHasArray();
testListStoredNotes();
