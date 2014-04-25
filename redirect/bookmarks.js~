function process_bookmark(bookmarks) {
	var s = "";
    for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            s+=("<p><a href = "+bookmark.url+">"+ bookmark.title + "</a></p>");
        }

        if (bookmark.children) {
            s+=process_bookmark(bookmark.children);
        }
    }
	
    $("#content").html(s);
	return s;
}



chrome.bookmarks.getTree(process_bookmark)

