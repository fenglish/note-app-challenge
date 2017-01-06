
window.onload = function(){
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
    if(text !== "<ul></ul>"){
      throw new Error("List is not empty");
    };
  }

  function whenSubmitButtonClicked(){
    var textarea = document.getElementById("text")
    textarea.value = "test"
    var text = document.getElementById("text").value
    NoteController.list.add(text);
    console.log(NoteController.list);
    var listView = new ListView();
    var listHtml = listView.changeToHtml(NoteController.list);
    NoteController.showList(listHtml);
    if(document.getElementById("app").innerHTML !== "<ul><li><a href=\"#notes/8\"><div>test</div></a></li></ul>"){
      throw new Error("Text not updated");
    };

  };
  whenAppLoadedWithEmptyList();
  whenSubmitButtonClicked();
  testIsSingleNoteView();
  testShowNote();
  testNoteControllerExsist();
  testNoteControllerHasShowList();
  testNoteControllerShowList();
}
