(function(listViewExport){

  var ListView = function(){

  };


  ListView.prototype.changeToHtml = function(list){
    var listArray = list.view().map(function(note){
      return "<li><div>" + note.text.slice(0,20) + "</div></li>";
    });
    return "<ul>" + listArray.join('') + "</ul>";
  };


  listViewExport.ListView = ListView;

})(this);
