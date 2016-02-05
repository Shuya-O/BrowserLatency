// backgroundからデータの取得
var latency = chrome.extension.getBackgroundPage().latency;
var dnsTime = chrome.extension.getBackgroundPage().dnsTime;
var tcpTime = chrome.extension.getBackgroundPage().tcpTime;
var requestTime = chrome.extension.getBackgroundPage().requestTime;
var responseTime = chrome.extension.getBackgroundPage().responseTime;
var domInteractiveTime = chrome.extension.getBackgroundPage().domInteractiveTime;
var domCompleteTime = chrome.extension.getBackgroundPage().domCompleteTime;
console.log("backgroudから読み取り");
console.log("backgroudからとったdomInteractiveTime = "+domInteractiveTime);

// ベタ文で描画
var result = document.getElementById("push");
result.addEventListener("click", write, false);

function write () {
  console.log(latency);
  console.log(dnsTime);
  var text = "DNS："+dnsTime+"ミリ秒<br>";
  text += "TCP："+tcpTime+"ミリ秒<br>";
  text += "Request："+requestTime+"ミリ秒<br>";
  text += "Response："+responseTime+"ミリ秒<br>";
  text += "DOM Interactive："+domInteractiveTime+"ミリ秒<br>";
  //text += "DOM Complete："+domCompleteTime+"ミリ秒<br>";

  document.getElementById("result").innerHTML = text;
}

//動いてくれない visualizationAPI描画を始める
var graph = document.getElementById("push2");
// google.load("visualization", "1", {packages:["corechart"],callback:function(){
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

  // graph.addEventListener("click", drawChart, false);
  function drawChart(){
    var data = new google.visualization.DataTable();
      data.addColumn("string", "type");
      data.addColumn("number", "time");
      /* 型を確かめる
      var type = typeof(dnsTime);
      console.log(type);
      */
      var row_data = [
        [ "DNS", dnsTime],
        [ "TCP", tcpTime],
        [ "Request", requestTime],
        [ "Response", responseTime],
        [ "DOM Interactive", domInteractiveTime]
      ];
      data.addRows([
        [ "DNS", dnsTime],
        [ "TCP", tcpTime],
        [ "Request", requestTime],
        [ "Response", responseTime],
        [ "DOM Interactive", domInteractiveTime]
      ]);

      var chart = new google.visualization.PieChart(document.getElementById("graph"));
      chart.draw(data);
      console.log(data);
    }
// }});
// google.setOnLoadCallback(drawChart);
