// doubles
note = {};
note.returnNoteText = function(){ return "Favourite drink: margarita";};
note.returnId = function(){ return 0; };

noteList = {};
noteList.showNotes = function(){ return [note]; };
noteList.createNote = function(){ return note; };
noteList.findNote = function(){ return note; };

note2 = {};
note2.returnNoteText = function(){ return "Favourite food: banana";};
note2.returnId = function(){ return 0; };

noteList2 = {};
noteList2.showNotes = function(){ return [note2]; };
noteList2.createNote = function(){ return note2; };
noteList2.findNote = function(){ return note2; };

// tests
(function testInstantiateNoteController() {
  var controller = new NoteController(noteList);
  assert.isTrue(typeof controller === "object", testInstantiateNoteController.name)
})();

(function testUpdateHTML() {
  var controller = new NoteController(noteList);
  controller.addNoteListView();
  controller.updateHTML("app");
  assert.isTrue(app.innerHTML === "<ul><li><a href=\"#0\">Favourite drink: ma</a></li></ul>", testUpdateHTML.name)
})();

(function showNoteforCurrentPage(){
  var controller = new NoteController(noteList);
  controller.addNoteListView(noteList);
  controller.updateHTML("app");
  controller.showSingleNoteOnUrlChange("app");
  if(!(window.location.href.includes("#0"))){
    window.location.href += "#0"
  }
  window.addEventListener("hashchange", function() {
      assert.isTrue(app.innerHTML === "<div>Favourite drink: margarita</div>", showNoteforCurrentPage.name);
  });
})();

(function testNoteCreation(){
  var controller = new NoteController(noteList2);
  controller.addNoteListView(noteList2);
  controller.updateHTML("app");
  var textarea = document.getElementById("textarea")
  textarea.value = "Favourite food: banana"
  var text = document.getElementById("textarea").value
  controller._noteList.createNote(text);
  controller.updateHTML("app")
  document.getElementById("text").reset();
  assert.isTrue(app.innerHTML.includes("Favourite food: ban"), testNoteCreation.name);
})();
