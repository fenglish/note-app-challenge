(function(exports){
  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.viewHtml = function(){
    var output = "<div>" + this.note.view() + "</div>";
    return output;
  };

  exports.SingleNoteView = SingleNoteView
})(this);
