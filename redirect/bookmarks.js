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
chrome.bookmarks.search("ReadirectMeUnread", process_bookmark)


//given a url, finds the chrome bookmark and moves it into another folder
//use search to find the page in the bookmarks
//use search to find the ReadirectMeRead folder 
//then use move to move it into the ReadirectMeRead

function moveUrl(pageURL) {
	//Find read folder
  console.log(":(")
	chrome.bookmarks.search("ReadirectMeRead", function(read){
			console.log(read);
		if (read.length > 0){
			var folder = read[0];
			//Search for the bookmarks that match the URL clicked and move them into the read folder 
      chrome.bookmarks.search(pageURL, function(results){
        for (var i = 0; i < results.length; i++){
				  console.log(results[i], folder);
					chrome.bookmarks.move(results[i].id, {parentId: folder.id}, function(result) { console.log("STRING");});
        }
			})
		}
	})	
}


$(document).on('click', '#url', function () {
  moveUrl(this.href);
  console.log(this.href);
});

