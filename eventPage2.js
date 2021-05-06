const contextMenuItem = {
    id: "test",
    title: "Test",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if(clickData.menuItemId === "test" && clickData.selectionText){
        
        const notiObject = {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'Show selected text',
            message: clickData.selectionText
        };
        chrome.notifications.create('', notiObject);
    }
});

chrome.storage.onChanged.addListener(function(changes, storageName){
    chrome.browserAction.setBadgeText({text: "test 1"})
});


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
chrome.tabs.query({currentWindow: true}, function(tabs) {
    // chrome.pageAction.show(tabs[0].id);
    const len = tabs.length;
    chrome.browserAction.setBadgeText({text: len.toString()})
});