chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ showCircle: { key: 'a', keyCode: 97 } }, function () {
    });

    chrome.storage.sync.set({ persistent: { persistVisual: true } }, function () {
    });

    chrome.storage.sync.set({ bubbleCursor: {enabled : false} }, function () {
    });

    chrome.tabs.create({ url: "options.html" }, function (tab) { });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlMatches: '.' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});