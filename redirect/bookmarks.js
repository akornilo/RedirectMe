function process_bookmark(bookmarks) {

  bId = bookmarks[0].id;
  
  chrome.bookmarks.getChildren(bId, function(child){
    var s = "";
    console.log(child);
    for (var i = 0; i < child.length; i++){
      if (child[i].url) {
        s+=("<p class = \"link\"><a href = "+child[i].url+">"+ child[i].title + "</a></p>");
      }
    }
    $("#content").html(s);
  
  });
}
chrome.bookmarks.search("RedirectMeUnread", process_bookmark)



