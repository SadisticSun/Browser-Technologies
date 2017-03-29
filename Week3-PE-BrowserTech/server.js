var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var exampleData = require('./data.json');



app.set('port', (process.env.PORT || 8080));
app.use(urlencodedParser);
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', function(req, res) {
  res.render('index', {
      user_query: req.query,
      items: null
  });
});

app.post('/', urlencodedParser, function(req, res) {
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };
    var people = exampleData;
    var userQuery = req.body.query;
    var formattedQuery = userQuery.capitalize();
    var results = [];

    console.log('Gezocht naar: ' + formattedQuery);


    for (var i = 0; i < people.length; i++) {
      if (people[i].first_name == formattedQuery) {
        results.push(people[i]);
      }
    }

    console.log('Gevonden: ' + results);

    res.render('index', {
        user_query: formattedQuery,
        items: results
    });
});

app.get('/details/:id', function(req, res) {
    res.render('details', {
        // detail page
    });
});
app.listen(app.get('port'), function() {
    console.log('App listening on: http://localhost:8080');
});
