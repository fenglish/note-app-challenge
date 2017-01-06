noteList = new NoteList();
noteList.createNote("Favourite drink: margarita");

function testInstantiateNoteController() {
  var controller = new NoteController(noteList);
  assert.isTrue(typeof controller === "object")
};
testInstantiateNoteController();

function testUpdateHTML() {
  var controller = new NoteController(noteList);

  controller.addNoteListView();
  var app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);
  controller.updateHTML("app");
  assert.isTrue(app.innerHTML === "<ul><li><a href=\"#0\">Favourite drink: ma</a></li></ul>")
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
      assert.isTrue(app.innerHTML === "<div>Favourite drink: margarita</div>");
  });
})();
