(function(exports){

  function Note(noteText) {
    this.text = noteText;
  }

  Note.prototype.getText = function(){
    return this.text;
  }


  exports.Note = Note;


})(this);
