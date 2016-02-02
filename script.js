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

  /* 動いてくれない visualizationAPI描画を始める
  google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(function(){
      var data = new google.visualization.DataTable();
      data.addColumn("string", "type");
      data.addColumn("number", "time");
      data.addRows([
        [ "DNS", dnsTime],
        [ "TCP", tcpTime],
        [ "Request", requestTime],
        [ "Response", responseTime],
        [ "DOM Interactive", domInteractiveTime],
        [ "DOM Complete", domCompleteTime]
      ]);
      var chart = new google.visualization.PieChart(document.getElementById("graph"));
      chart.draw(data, {
        width: 250,
        height: 150,
        title: "Navigation Timing Result"
      });
   })
   */
  sendmessage(latency);
  write();
}, false);

function write () {
  var text = "DNS："+dnsTime+"ミリ秒<br>";
  text += "TCP："+tcpTime+"ミリ秒<br>";
  text += "Request："+requestTime+"ミリ秒<br>";
  text += "Response："+responseTime+"ミリ秒<br>";
  text += "DOM Interactive："+domInteractiveTime+"ミリ秒<br>";
  text += "DOM Complete："+domCompleteTime+"ミリ秒<br>";
  document.getElementById("result").innerHTML = text;
}

//値をbackgroundの送信
function sendmessage (latency) {
  chrome.extension.sendMessage({
    latency: latency
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
