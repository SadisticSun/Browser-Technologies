(function(){
    "use strict";

    var socket = io();

    var form = {
      pollForm: document.getElementById('submit-poll-form'),
      answerForm: document.getElementById('submit-answer-form'),
      answer1: document.getElementById('answer1'),
      answer2: document.getElementById('answer2')
    }

    var app = {
      init: function () {
        form.answer1.addEventListener('click', function() {
          console.log(window.location.href);
          app.sendAnswer1();
        });
        form.answer2.addEventListener('click', function() {
          app.sendAnswer2();
        });
      },
      sendAnswer1: function () {
        socket.emit('answer1', function () {
          console.log('Antwoord 1 gegeven');
        })
        // app.redirect();
      },
      sendAnswer2: function () {
        socket.emit('answer2', function () {
          console.log('Antwoord 2 gegeven');
        })
        // app.redirect();
      },

      redirect: function () {
        var userAgent = navigator.userAgent.toLowerCase(),
        isIE          = userAgent.indexOf('msie') !== -1,
        version       = parseInt(userAgent.substr(4, 2), 10),
        formID        = form.answerForm.getAttribute('data-name'),
        url           = '/results/' + formID;

        // Internet Explorer 8 and lower
        if (isIE && version < 9) {
            var link = document.createElement('a');
            link.href = url;
            document.body.appendChild(link);
            link.click();
        }

        // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
        else {
            window.location.href = url
        }
      }
    };

    app.init();

})();
