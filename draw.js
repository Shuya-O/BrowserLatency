
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
