bad = []

badDirId = 0

function find_bad(tree){
	badDirId = tree[0].id;
	links = chrome.bookmarks.getChildren(badDirId, function(child){
		v = Array(child.length);
		for (var i =0; i < child.length; i++) {
			v[i] = child[i].url
		}
		bad = v;
		})
}

chrome.bookmarks.search("ReadirectMeBadPages",find_bad);

chrome.runtime.onMessage.addListener(function(message, sender){
	if(bad.indexOf(message.url) >= 0){
		chrome.tabs.update(sender.tab.id, {url:chrome.extension.getURL('page.html')});
	}
});


chrome.bookmarks.onCreated.addListener(function (id, bookmark){
	console.log(bookmark);
  if(bookmark.parentId == badDirId){
		bad.push(bookmark.url);
	}
})
