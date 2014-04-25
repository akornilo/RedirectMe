//Find bookmarks to print out
function process_bookmark(bookmarks) {

  bId = bookmarks[0].id;
  
  chrome.bookmarks.getChildren(bId, function(child){
    var s = "";
    for (var i = 0; i < child.length; i++){
      if (child[i].url) {
        s = "<p class = \"link\"><a id = \"url\" href = \""+child[i].url+"\">"+ child[i].title + "</a></p>";
        $("#content").append(s);
      }
    }
  
  });
}
chrome.bookmarks.search("RedirectMeUnread", process_bookmark)


$(document).on('click', '#url', function () {
  console.log(this.href);
});

