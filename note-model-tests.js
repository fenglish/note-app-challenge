function testNoteInstantiatedWithText() {
  var noteText = "My favourite language is JavaScript";
  var note = new Note(noteText);
  if (note.getText() !== noteText) {
    throw new Error("Note text is not correct");
  }
}

testNoteInstantiatedWithText();
