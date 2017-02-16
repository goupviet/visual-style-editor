
chrome.browserAction.onClicked.addListener(function (tab) {

    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action", "id": activeTab.id});
    });


    var id = tab.id;
    if (tab.url.indexOf("https://chrome.google.com") == 0 || tab.url.indexOf("chrome://") == 0 || tab.url.indexOf("googleusercontent.com") == 0) {
        alert(chrome.i18n.getMessage("error_google"));
        return;
    } else if (tab.url.indexOf("file:///") == 0) {
        alert(chrome.i18n.getMessage("error_local"));
        return;
    }

    chrome.browserAction.getTitle({
        tabId: id
    }, function (title) {
        chrome.tabs.sendMessage(id, 'browserAction');
    });
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "dom_loaded" ) {
            var id = request.id;
/*            chrome.tabs.insertCSS(id, {file: "assets/css/dashicons.min.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/contextmenu.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/nouislider.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/iris.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/bootstrap-tooltip.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/sweetalert.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/yellow-pencil.css"});
            chrome.tabs.insertCSS(id, {file: "assets/css/frame.css"});

            chrome.tabs.executeScript(id, {file: "assets/js/contextmenu.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/wNumb.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/core.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/widget.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/mouse.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/slider.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/draggable.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/resizable.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/menu.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/jquery/ui/autocomplete.min.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/iris.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/wNumb.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/bootstrap-tooltip.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/css-engine.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/sweetalert.js"});*/

/*            chrome.tabs.executeScript(id, {file: "assets/js/ace/ace.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/ace/ext-language_tools.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/yellow-pencil-dev.js"});
            chrome.tabs.executeScript(id, {file: "assets/js/init.js"});*/

        }
    }
);

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request == "getUrls") {
        sendResponse({
            "action": localStorage["codecola_save_action"] ? localStorage["codecola_save_action"] : ""
        });
    }
});