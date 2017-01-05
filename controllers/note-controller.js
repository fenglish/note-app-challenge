(function(exports){
  exports.NoteController = {
    createList: function(){ this.list = new List() },
    showList: function(listHtml){
            var element = document.getElementById("app");
            element.innerHTML = listHtml;
    },

    makeUrlChangeIdForCurrentPage: function() {
      window.addEventListener("hashchange", this.showAnimalForCurrentPage.bind(this));
    },

    showAnimalForCurrentPage: function () {
      this.showNote(this.getNoteFromUrl(window.location));
    },

    getNoteFromUrl: function (location) {
      var noteId = location.hash.split("/")[1];
      var note = this.list.list[noteId];
      return note
    },

    showNote: function (note) {
        document
          .getElementById("note")
          .innerHTML = new SingleNoteView(note).viewHtml();
    }
  };
})(this);
