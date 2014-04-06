function process_bookmark(bookmarks) {
	var s = "";
    for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            s+=("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
        }

        if (bookmark.children) {
            s+=process_bookmark(bookmark.children);
        }
    }

    return s;
}

console.log(chrome.bookmarks.getTree( process_bookmark ));


$("#content").text(chrome.bookmarks.getTree( process_bookmark ))