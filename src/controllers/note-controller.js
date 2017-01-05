"use strict";

(function(exports) {

  function NoteController(noteList){
    this._noteList = noteList;
    var self = this;
  }

  NoteController.prototype.addNote = function(text){
    this._noteList.createNote(text);
  };

  NoteController.prototype.addNoteListView = function(){
    this.noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.updateHTML = function(id){
    var getListNotes = this.noteListView.listNotes();
    var noteDisplay = document.getElementById(id);
    noteDisplay.innerHTML = getListNotes;
  };



  NoteController.prototype.showSingleNoteOnUrlChange = function(){
    window.addEventListener("hashchange", this.showNoteforCurrentPage);
  };

  NoteController.prototype.showNoteforCurrentPage = function(){
    var note = this.noteController._noteList.showNotes()[0];
    var singleNoteView = new SingleNoteView(note);
    var noteDisplay = document.getElementById("app");
    noteDisplay.innerHTML = singleNoteView.viewNote();
  };

  exports.NoteController = NoteController;

})(this);
