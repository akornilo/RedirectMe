//Find bookmarks to print out
function process_bookmark(bookmarks) {

  bId = bookmarks[0].id;
  
  chrome.bookmarks.getChildren(bId, function(child){
    var s = "";
    for (var i = 0; i < child.length; i++){
      if (child[i].url) {
        $("#content").append("<p class = \"link\"><a href = "+child[i].url+">"+ child[i].title + "</a></p>");
      }
    }
  
  });
}
chrome.bookmarks.search("RedirectMeUnread", process_bookmark)

//Move bookmarks to read when clicked
//Neither of these attempts works properly :(
$( "#url" ).click(function() {
    console.log( "Handler for .click() called." );
});

$(document).on('click', 'p', function () {
      console.log(this);
});

