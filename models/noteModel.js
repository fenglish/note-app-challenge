(function(exports) {
  var idCount = 0;
  var Note = function(text){
    this.text = text;
    this.id = idCount;
    idCount += 1;
  };

  Note.prototype.view = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
