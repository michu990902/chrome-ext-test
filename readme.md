https://chrome.google.com/webstore/devconsole

3 types
- on toolbar and accessible all time
- page ext
- run on bcg (browser/page action)


chrome tts

manifest min:
- manifest version
- name of the ext
- version of the ext



"page_action":{
    "default_icon": "icon16.png",
    "default_popup": "popup.html",
    "default_title": "PA test"
}

"content_scripts":[
    {
        "matches": ["http://developer.chrome.com/*"],
        "js": ["content.js", "jquery.js"],
        "css": ["page_style.js"]
    }
]

"permissions":[
    "http://developer.chrome.com/*"
]