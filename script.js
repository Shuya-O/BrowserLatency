/* window.onload だと動かない
window.onload = function() {
  var now = new Date().getTime();
  var latency = now - performance.timing.navigationStart;
  chrome.browserAction.setBadgeText({text:String(latency)});
};
*/
//速度計測
if (window.addEventListener) window.addEventListener('load',function() {
  var now = new Date().getTime();
  var latency = now - performance.timing.navigationStart;
  //chrome.browserAction.setBadgeText({text:String(latency)});
  sendmessage(latency);
}, false);

//値をbackgroundの送信
function sendmessage (latency) {
  chrome.extension.sendMessage({
    latency: latency
  },     function(response){
          console.debug(response.message);
      }
  );
}
