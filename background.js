var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

chrome.browserAction.onClicked.addListener(function (tab) {
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }
});