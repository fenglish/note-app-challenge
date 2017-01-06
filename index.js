noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.addNoteListView();
noteController.showSingleNoteOnUrlChange("app");
noteController.preventSubmit("text")
