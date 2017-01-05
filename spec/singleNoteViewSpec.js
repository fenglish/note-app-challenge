function testShowHtml(){
  var note = new Note("test")
  var singleNoteView = new SingleNoteView(note);
  if (singleNoteView.viewHtml() !== "<div>test</div>") {
    throw new Error("Html not displayed correctly");
  };
};

testShowHtml();
