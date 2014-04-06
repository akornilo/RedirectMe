var host = chrome.extension.getURL('page.html');

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host };
    },
    {
        urls: [
            "*://facebook.com/*",
            "*://www.facebook.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
