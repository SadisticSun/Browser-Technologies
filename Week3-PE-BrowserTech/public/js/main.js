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
      // redirect: function () {
      //   var userAgent = navigator.userAgent.toLowerCase(),
      //   isIE          = userAgent.indexOf('msie') !== -1,
      //   version       = parseInt(userAgent.substr(4, 2), 10),
      //   formID        = elements.answerForm.getAttribute('data-name'),
      //   url           = '/thankyou';
      //
      //   // Internet Explorer 8 and lower
      //   if (isIE && version < 9) {
      //       var link = document.createElement('a');
      //       link.href = url;
      //       document.body.appendChild(link);
      //       link.click();
      //   }
      //
      //   // All other browsers can use the standard window.location.href
      //   else {
      //       window.location.href = url
      //   }
      // }
    };

    app.init();

})();
