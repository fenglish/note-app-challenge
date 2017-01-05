(function(exports) {

  function NoteList(){
    this._notes = [];
    this._count = 0
  }

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.showNotes = function(){
    return this._notes;
  };

  NoteList.prototype.createNote = function(string){
    var note = new Note(string, this._count);
    this._count += 1
    this.addNote(note);
  };

  exports.NoteList = NoteList;

})(this);
