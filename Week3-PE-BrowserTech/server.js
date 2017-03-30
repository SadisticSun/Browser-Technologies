var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var exampleData = require('./data.json');

app.use(express.static('public'));
app.use(urlencodedParser);
app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'ejs');

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

    for (var i = 0; i < people.length; i++) {
      if (people[i].first_name.includes(formattedQuery) || people[i].last_name.includes(formattedQuery)) {
        results.push(people[i]);
      }
    }

    res.render('index', {
        user_query: formattedQuery,
        items: results
    });
});

app.get('/person/:id', function(req, res) {
    var id = req.params.id;
    var person = exampleData.find(function(result) {
      return result.id == id;
    });
    res.render('details', {
        "person": person
    });
});
app.listen(app.get('port'), function() {
    console.log('App listening on: http://localhost:8080');
});
