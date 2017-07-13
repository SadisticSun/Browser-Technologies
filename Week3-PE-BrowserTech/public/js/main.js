(function(){
    "use strict";

    // Fallback for IE8's lack of console log without opening dev tools
    if (typeof console == "undefined") console = {
        log: function() {},
        debug: function() {},
        error: function() {}
    };

    var socket = io();

    var elements = {
      answerForm:           document.getElementById('submit-answer-form')
    }
    var app = {
      init: function () {

        // Check if eventlistener is supported (for IE8 and below)
        if (!document.addEventListener) {
          console.log('No eventlistener');
          elements.answerForm.attachEvent('onsubmit', function(e) {
            app.sendAnswerViaSocket();
            app.redirect();
          });
        } else {
          elements.answerForm.addEventListener('submit', function(e) {
            console.log('Antwoord 1 versturen');
            app.sendAnswerViaSocket();
            app.redirect();
          });
        }
      },
      sendAnswerViaSocket: function () {
        socket.emit('answer1', function () {
          console.log('Antwoord gegeven');
        })
      },
    };

    app.init();

})();
