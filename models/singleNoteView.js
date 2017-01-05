(function(exports){
  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.viewHtml = function(){
    var output = "<div>" + this.note.view() + "</div>";
    console.log(output);
    return output;
  };

  exports.SingleNoteView = SingleNoteView
})(this);
