noteList = new NoteList();
noteList.createNote("Favourite drink: margarita");

function testInstantiateNoteController() {
  var controller = new NoteController(noteList);
  assert.isTrue(typeof controller === "object", testInstantiateNoteController.name)
};
testInstantiateNoteController();

function testUpdateHTML() {
  var controller = new NoteController(noteList);

  controller.addNoteListView();
  controller.updateHTML("app");
  assert.isTrue(app.innerHTML === "<ul><li><a href=\"#0\">Favourite drink: ma</a></li></ul>", testUpdateHTML.name)
}
testUpdateHTML();

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
  var controller = new NoteController(noteList);
  controller.addNoteListView(noteList);
  controller.updateHTML("app");
  var textarea = document.getElementById("textarea")
  textarea.value = "Favourite food: banana"
  var text = document.getElementById("textarea").value
  controller._noteList.createNote(text);
  controller.updateHTML("app")
  document.getElementById("text").reset();
  assert.isTrue(app.innerHTML.includes("Favourite food: ban"), testNoteCreation.name);
})();
