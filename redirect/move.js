//given a url, finds the chrome bookmark and moves it into another folder
//use search to find the page in the bookmarks
//use search to find the ReadirectMeRead folder 
//then use move to move it into the ReadirectMeRead

function moveUrl(pageURL) {
	//Find read folder 
	chrome.bookmarks.search("RedirectMeRead", function(read){
		if (read.length > 0){
			var folder = read[0].id;
			//Search for the bookmarks that match the URL clicked and move them into the read folder 
			//TODO: filter these by things that are in RedirectMeUnread?
			chrome.bookmarks.search(pageURL, function(results){
				for (var i = 0; i < results.length; i++){
					chrome.bookmarks.move(results[i], folder)
				}
			})
		}
	})	
}