// backgroundじゃDOM操作できないからscript.jsからもらう
//chrome.browserAction.setBadgeText({"text":"0"}); // default
// script.jsから値をうけとる
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
      chrome.browserAction.setBadgeText({"text":String(request.latency)});
      console.log(request.latency);
      console.log(request.dnsTime);
      sendResponse({message: "kanryou"});
      //格納しなおし
      var latency = request.latency
      var dnsTime = request.dnsTime
      var tcpTime = request.tcpTime
      var requestTime = request.requestTime
      var responseTime = request.responseTime
      var domInteractiveTime = request.domInteractiveTime
      var domCompleteTime = request.domCompleteTime
      console.log(latency + "成功");
    }
  );
