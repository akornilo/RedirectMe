function process_bookmark(bookmarks) {

    for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            chrome.extension.getBackgroundPage().console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
        }

        if (bookmark.children) {
            process_bookmark(bookmark.children);
        }
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.extension.getBackgroundPage().console.log("listing bookmarks: " );
  chrome.bookmarks.getTree( process_bookmark );
});


