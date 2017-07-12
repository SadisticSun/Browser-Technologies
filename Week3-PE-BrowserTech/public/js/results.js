(function() {
  'use strict';

  var socket = io();
  var ctx = document.getElementById("resultsChart");
  var answer1 = document.getElementById('answer1-value').getAttribute('data-answer');
  var answer2 = document.getElementById('answer2-value').getAttribute('data-answer');
  var results1Count = 0;
  var results2Count = 0;

  var chartData = {
      datasets: [{
          data: [0, 0],
          backgroundColor: ["#F012BE", "#FFDC00"]
      }],
      labels: [
          answer1,
          answer2
      ]
  };

  var resultsChart;
  var updateChart;

  if (document.addEventListener) {
    resultsChart = new Chart(ctx,{
        type: 'pie',
        data: chartData,
        options: {
          legend: {
            labels: {
                fontColor: "white",
                fontSize: 18,
            }
          }
        }
    });
    updateChart = function(i, resultcounter) {
      chartData.datasets[0].data[i] = resultcounter;
      resultsChart.update();
      console.log('Chart updated');
    }
  } else {
    updateChart = function(){
      console.log('No chart supported, skipped loading');
    }
  }

  // Fallback for IE8's lack of console log without opening dev tools
  if (typeof console == "undefined") console = {
      log: function() {},
      debug: function() {},
      error: function() {}
  };

  socket.on('updateAnswer1', function () {
    console.log('Antwoord 1 ontvangen!');
    results1Count++;
    updateChart(0, results1Count);
    console.log('Aantal antwoord 1: ' + results1Count);
    document.getElementById('results1').innerHTML = results1Count;
  });

  socket.on('updateAnswer2', function () {
    console.log('Antwoord 2 ontvangen!');
    results2Count++;
    updateChart(1, results2Count);
    console.log('Aantal antwoord 2: ' + results2Count);
    document.getElementById('results2').innerHTML = results2Count;
  });

}());
