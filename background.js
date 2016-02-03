// backgroundじゃDOM操作できないからscript.jsからもらう
//chrome.browserAction.setBadgeText({"text":"0"}); // default
// script.jsから値をうけとる
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
      chrome.browserAction.setBadgeText({"text":String(request.latency)});
      console.log(request.latency);
      console.log(request.dnsTime);
      console.log(request.responseTime);
      sendResponse({message: "kanryou"});
    }
  );
