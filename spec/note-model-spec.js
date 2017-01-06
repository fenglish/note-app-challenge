(function testNoteCreation() {
  var note = new Note("test");
  assert.isTrue(note._text === "test", testNoteCreation.name);
})();

(function testReturnNoteText() {
  var note = new Note("test");
  assert.isTrue(note.returnNoteText() === note._text, testReturnNoteText.name);
})();

(function testCreationWithId() {
  var note = new Note("test", 1);
  assert.isTrue(note._id === 1, testCreationWithId.name);
})();

(function testReturnId() {
  var note = new Note("test", 1);
  assert.isTrue(note.returnId() === 1, testReturnId.name);
})();
