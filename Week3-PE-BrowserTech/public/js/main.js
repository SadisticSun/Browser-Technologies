(function(){
    "use strict";

    // Fallback for IE8's lack of console log without opening dev tools
    if (typeof console == "undefined") console = {
        log: function() {},
        debug: function() {},
        error: function() {}
    };

    var socket = io();

    var form = {
      noscriptWarning: document.getElementById('noscript-warning'),
      pollForm: document.getElementById('submit-poll-form'),
      answerForm: document.getElementById('submit-answer-form'),
      answer1: document.getElementById('answer1'),
      answer2: document.getElementById('answer2')
    }

    var app = {
      init: function () {

        // Remove the No Javascript message when JS is enabled. Using innerHTML is supported on all browsers, even older IE versions.
        form.noscriptWarning.innerHTML = "";

        if (!document.addEventListener) {
          form.answer1.attachEvent('onclick', function() {
            app.sendAnswer1();
          });
          form.answer2.attachEvent('onclick', function() {
            app.sendAnswer2();
          });
        } else {
          form.answer1.addEventListener('click', function() {
            console.log('Antwoord 1 versturen');
            app.sendAnswer1();
          });
          form.answer2.addEventListener('click', function() {
            console.log('Antwoord 2 versturen');
            app.sendAnswer2();
          });
        }
      },
      sendAnswer1: function () {
        socket.emit('answer1', function () {
          console.log('Antwoord 1 gegeven');
        })
        app.redirect();
      },
      sendAnswer2: function () {
        socket.emit('answer2', function () {
          console.log('Antwoord 2 gegeven');
        })
        app.redirect();
      },

      redirect: function () {
        var userAgent = navigator.userAgent.toLowerCase(),
        isIE          = userAgent.indexOf('msie') !== -1,
        version       = parseInt(userAgent.substr(4, 2), 10),
        formID        = form.answerForm.getAttribute('data-name'),
        url           = '/thankyou';

        // Internet Explorer 8 and lower
        if (isIE && version < 9) {
            var link = document.createElement('a');
            link.href = url;
            document.body.appendChild(link);
            link.click();
        }

        // All other browsers can use the standard window.location.href
        else {
            window.location.href = url
        }
      }
    };

    app.init();

})();
