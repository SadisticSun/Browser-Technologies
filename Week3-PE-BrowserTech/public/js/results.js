(function() {
  'use strict';

  var socket = io();

  var results1Count = 0;
  var results2Count = 0;

  socket.on('updateAnswer1', function () {
    console.log('Antwoord 1 ontvangen!');
    results1Count++;
    document.getElementById('results1').innerHTML = results1Count;
  });

  socket.on('updateAnswer2', function () {
    console.log('Antwoord 2 ontvangen!');
    results2Count++;
    document.getElementById('results2').innerHTML = results2Count;
  });

}());
