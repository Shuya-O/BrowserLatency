var latency = chrome.extension.getBackgroundPage().latency;

// ベタ文で描画
var result = document.getElementById("push");
result.addEventListener("click", write, false);

function write () {
  console.log(latency);
  /*"DNS："+dnsTime+"ミリ秒<br>";
  text += "TCP："+tcpTime+"ミリ秒<br>";
  text += "Request："+requestTime+"ミリ秒<br>";
  text += "Response："+responseTime+"ミリ秒<br>";
  text += "DOM Interactive："+domInteractiveTime+"ミリ秒<br>";
  text += "DOM Complete："+domCompleteTime+"ミリ秒<br>";
  */
  document.getElementById("result").innerHTML = text;
}


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
