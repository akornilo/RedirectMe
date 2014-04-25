console.log("poop");
//chrome.extension.onRequest.addListener(function(request, sender) {
//        chrome.tabs.update(sender.tab.id, {url: request.redirect});});

bad = []

badDirId = 0

function find_bad(tree){
	badDirId = tree[0].id;
	links = chrome.bookmarks.getChildren(tree[0].id, function(child){
		v = Array(child.length);
		for (var i =0; i < child.length; i++) {
			v[i] = child[i].url
		}
		bad = v;
		console.log(bad)
		})
}

chrome.bookmarks.search("RedirectMeBadPages",find_bad);

chrome.runtime.onMessage.addListener(function(message, sender){
	if(bad.indexOf(message.url) >= 0){
		chrome.tabs.update(sender.tab.id, {url:chrome.extension.getURL('page.html')});
	}
});


chrome.bookmarks.onCreated.addListener(function (id, bookmark){
	if(bookmark.parentId == badDirId){
		bad.push(bookmark.url);
	}
})