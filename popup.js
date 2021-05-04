document.addEventListener("DOMContentLoaded", () => {
    if(!document.body) return;

    const h1 = document.querySelector("#header");
    const span = document.querySelector("#span");
    const btn = document.querySelector("#btn");
    const txtInput = document.querySelector("#txt");
    txtInput.addEventListener("input", () => {
        h1.textContent = "Test "+ txtInput.value;
    })


    let value = 0;
    chrome.storage.sync.get('total', obj => {
        value = obj.total;
        span.textContent = parseInt(value, 10);
    });

    btn.addEventListener('click', () => {
        value += 100;
        chrome.storage.sync.set({
            'total': value,
        });
        span.textContent = value;
    });

});