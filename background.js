// backgroundじゃDOM操作できないからscript.jsからもらう
//chrome.browserAction.setBadgeText({"text":"0"}); // default
// script.jsから値をうけとる
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
      chrome.browserAction.setBadgeText({"text":String(request.latency)});
      console.log(request.latency);
      console.log(request.dnsTime);
      sendResponse({message: "kanryou"});
      //格納しなおし 変数にすると動かないから注意
      latency = request.latency,
      dnsTime = request.dnsTime,
      tcpTime = request.tcpTime,
      requestTime = request.requestTime,
      responseTime = request.responseTime,
      domInteractiveTime = request.domInteractiveTime,
      domCompleteTime = request.domCompleteTime,

      console.log(latency + "成功");
    }
  );
