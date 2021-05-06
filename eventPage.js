chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.todo === "sendNotif"){
        const notiObject = {
            type: 'basic',
            // iconUrl: 'icon48.png',
            title: 'Random notif',
            message: clickData.selectionText
        };
        chrome.notifications.create('', notiObject);
    }
});