(function() {
  'use strict';
  
  var socket = io();

  // Remove the No Javascript message when JS is enabled. Using innerHTML is supported on all browsers, even older IE versions.
  var noscriptWarning = document.getElementById('noscript-warning');
  noscriptWarning.innerHTML = "";

  // Fallback for IE8's lack of console log without opening dev tools
  if (typeof console == "undefined") console = {
      log: function() {},
      debug: function() {},
      error: function() {}
  };

  var ctx = document.getElementById("resultsChart");
  var answer1Label = document.getElementById('answer0-value').getAttribute('data-answer');
  var answer2Label = document.getElementById('answer1-value').getAttribute('data-answer');
  var answer1CountLabel = document.getElementById('results0');
  var answer2CountLabel = document.getElementById('results1');
  var answer1Counter = 0;
  var answer2Counter = 0;

  var chartData = {
      datasets: [{
          data: [0, 0],
          backgroundColor: ["#F012BE", "#FFDC00"]
      }],
      labels: [
          answer1Label,
          answer2Label
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

  socket.on('updateAnswer1', function () {
    console.log('Antwoord 1 ontvangen!');
    answer1Counter++;
    answer1CountLabel.innerHTML = answer1Counter;
    updateChart(0, answer1Counter);
  });

  socket.on('updateAnswer2', function () {
    console.log('Antwoord 2 ontvangen!');
    answer2Counter++;
    answer2CountLabel.innerHTML = answer2Counter;
    updateChart(1, answer2Counter);
  });

}());
