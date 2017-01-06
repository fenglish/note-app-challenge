var listView = new ListView();
NoteController.createList();
var listHtml = listView.changeToHtml(NoteController.list);
NoteController.showList(listHtml);
NoteController.makeUrlChangeIdForCurrentPage();
NoteController.getTextFromForm();
