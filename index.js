var listView = new ListView();
NoteController.createList();
NoteController.list.add("Favourite drink: seltzer");
NoteController.list.add("Favourite food: Banana");
var listHtml = listView.changeToHtml(NoteController.list);
NoteController.showList(listHtml);
NoteController.makeUrlChangeIdForCurrentPage();
