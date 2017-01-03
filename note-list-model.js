(function(exports){

  function List() {
    this.notes = [];
  }

  List.prototype.getNotes = function(){
    return this.notes;
  }

  List.prototype.addNote = function(note){
    this.notes.push(note);
  }


  exports.List = List;


})(this);
