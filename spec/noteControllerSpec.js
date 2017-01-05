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

testIsSingleNoteView();
testShowNote();
testNoteControllerExsist();
testNoteControllerHasShowList();
testNoteControllerShowList();
