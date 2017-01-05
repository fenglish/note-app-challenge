function testNoteIsCreated() {

  note = new Note("Hello");

  if (note.text !== "Hello") {
    throw new Error("Incorrect note created")
  };

  if (note.view() !== note.text) {
    throw new Error("Note.view did not display the note correctly")
  }
};

function testNoteHasId(){
  note = new Note("Hello");
  note2 = new Note("Hello");

  if (note.id !== note2.id - 1) {
    throw new Error("Incorrect Id")
  };
}

testNoteIsCreated();
testNoteHasId();
