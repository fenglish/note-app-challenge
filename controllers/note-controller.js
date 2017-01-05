(function(exports){
  exports.NoteController = {
    createList: function(){ this.list = new List() },
    showList: function(listHtml){
            var element = document.getElementById("app");
            element.innerHTML = listHtml;
    },

    makeUrlChangeIdForCurrentPage: function() {
      window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this));
    },

    showNoteForCurrentPage: function () {
      this.showNote(this.getSingleNoteViewFromUrl(window.location));
    },

    getSingleNoteViewFromUrl: function (location) {
      var noteId = location.hash.split("/")[1];
      var note = this.list.list[noteId];
      var singleNoteView = new SingleNoteView(note);
      return singleNoteView
    },

    showNote: function (singleNoteView) {
        document
          .getElementById("note")
          .innerHTML = singleNoteView.viewHtml();
    },

    getTextFromForm: function (){
      document
        .getElementById("create-note")
        .addEventListener("submit", function(clickEvent){
          clickEvent.preventDefault();
          var text = document.getElementById("text").value
          console.log(text)
        })
    }


  };
})(this);
