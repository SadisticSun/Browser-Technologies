(function(){
    "use strict";
    console.log('Client JS loaded.');

    var utils = {
        $: function(id) {
            return document.getElementById(id);
        },
        $$: function(elements) {
            return document.querySelectorAll(elements);
        }
    };

    var DOMelements = {
        results: utils.$('results'),
        listItems: utils.$$('#results li')
    };

    var icons = {
        grid: utils.$('grid-icon'),
        rows: utils.$('row-icon'),
    };

    var app = {
      init: function () {
        icons.rows.addEventListener('click', function () {
            console.log('Rows icon clicked');
            DOMelements.results.classList.add('gridLayout');

            for (var i = 0; i < DOMelements.listItems.length; i++) {
              DOMelements.listItems[i].classList.add('align-grid');
            }

            icons.grid.classList.remove('active');
            icons.rows.classList.add('active');
        });

        icons.grid.addEventListener('click', function () {
            console.log('Grid icon clicked');
            if (DOMelements.results.classList.contains('gridLayout')) {
                DOMelements.results.classList.remove('gridLayout');
                icons.grid.classList.add('active');
                icons.rows.classList.remove('active');
            }
        });
      }
    };

    app.init();

})();
