//速度計測
var now = new Date().getTime();
var pt = performance.timing;
var startTime = pt.navigationStart;
var latency = now - startTime;

//描画に必要なデータ
var dnsTime = pt.domainLookupEnd - pt.domainLookupStart;  // DNS処理時間
var tcpTime = pt.connectEnd - pt.connectStart; // TCP処理時間
var requestTime = pt.responseStart - pt.requestStart; // リクエスト時間
var responseTime = pt.responseEnd - pt.responseStart; // レスポンス時間
var domInteractiveTime = pt.domInteractive - pt.domLoading;  // DOM操作可能までの時間
var domCompleteTime = pt.domComplete - pt.domLoading; // DOM構築完了までの時間

// window.onload だと動かない
if (window.addEventListener) window.addEventListener('load',function() {
  sendlatency();
}, false);

//値をbackgroundの送信
function sendlatency () {
  chrome.extension.sendMessage({
    latency: latency,
    dnsTime: dnsTime,
    tcpTime: tcpTime,
    requestTime: requestTime,
    responseTime: responseTime,
    domInteractiveTime: domInteractiveTime,
    domCompleteTime: domCompleteTime,
  },     function(response){
          console.debug(response.message);
      }
  );
}

/* for debug　インラインではイベントが動かん
function unko() {
  alert("動いてるぞ！")
}
document.getElementById("unko").onclick = function () {
  unko();
}
*/
