document.addEventListener("DOMContentLoaded", () => {
    if(!document.body) return;

    const btn = document.querySelector("#btn");

    btn.addEventListener('click', () => {
        const notiObject = {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'Test',
            message: 'Random message!'
        };
        chrome.notifications.create('notifID', notiObject);
    });

});