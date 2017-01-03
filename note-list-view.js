(function(exports){

  function ListView(list){
    this.list = list
  }

  ListView.prototype = {

    returnHtml: function(){
      var notes = this.list.getNotes()
      var listTextOfNotes = ["<ul>"]
      for( var i=0; i < notes.length; i++ ){
        listTextOfNotes.push("<li><div>" + notes[i].getText() + "</div></li>")
      }
      listTextOfNotes.push("</ul>")
      return listTextOfNotes.join("")
    }

  }

  exports.ListView = ListView;


})(this);
