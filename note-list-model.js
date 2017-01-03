(function(exports){

  function List() {
    this.notes = [];
  }

  List.prototype = {

    getNotes: function(){
      return this.notes;
    },

    addNote: function(note){
      this.notes.push(note);
    },

    createNote: function(noteText){
      var note = new Note(noteText);
      this.addNote(note);
    }
  }



  exports.List = List;


})(this);
