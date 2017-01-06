function testNoteControllerExsist(){
    if( typeof(NoteController) !== "object" ){
      throw new Error('NoteController is not accessible.');
    }
}

function testNoteControllerHasShowList(){
  if( !NoteController.showList ){
    throw new Error('function showList is not available.');
  }
}

function testNoteControllerShowList(){
  var listHtml = "<ul><li><div>Favourite food: pesto</div></li></ul>"
  NoteController.showList(listHtml);
  var element = document.getElementById("app");
  if( element.innerHTML !== listHtml ){
    throw new Error('function showList is not displaying a correct list.');
  }
}

function testShowNote(){
  function SingleNoteViewDouble(){
    this.callCount = 0;
  };

  SingleNoteViewDouble.prototype = {
    viewHtml: function(){
      this.callCount += 1;
      return "method was called";
    }
  };

  var myDouble = new SingleNoteViewDouble();
  NoteController.showNote(myDouble);
  if(myDouble.callCount !== 1) {
    throw new Error("Method was not called");
  };
};

function testIsSingleNoteView(){
  function LocationDouble(){
    this.hash = "#notes/0";
  };
  NoteController.createList();
  NoteController.list.add("test");
  var location = new LocationDouble();
  if(!(NoteController.getSingleNoteViewFromUrl(location) instanceof SingleNoteView)) {
    throw new Error("Not correct class");
  };
};

function whenAppLoadedWithEmptyList(){
  var text = document.getElementById("app").innerHTML;
  console.log(text);
  if(text !== ""){
    throw new Error("List is not empty");
  };
}

function whenSubmitButtonClicked(){
  var textarea = document.getElementById("text")
  console.log(textarea);
  textarea.value = "test"
  console.log(textarea.value);
  var button = document.getElementById("submit-button")
  button.click();
  if(document.getElementById("app").innerHTML !== "test"){
    throw new Error("Text not updated");
  };

}

whenSubmitButtonClicked();
whenAppLoadedWithEmptyList();
testIsSingleNoteView();
testShowNote();
testNoteControllerExsist();
testNoteControllerHasShowList();
testNoteControllerShowList();
