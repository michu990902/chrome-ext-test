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