const express           = require('express');
const path              = require('path');
const request           = require('request');
const bodyParser        = require('body-parser');
const app               = express();
const compression       = require('compression');
const urlencodedParser  = bodyParser.urlencoded({extended: false});
const exampleData       = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencodedParser);
app.use(compression())
app.set('port', (8080));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        user_query: req.query,
        items: null
    });
});

app.post('/', urlencodedParser, (req, res) => {

    String.prototype.capitalize = function () {
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

app.get('/person/:id', (req, res) => {
    var id = req.params.id;
    var person = exampleData.find(result => {
        return result.id == id;
    });
    res.render('details', {"person": person});
});

app.listen(app.get('port'), () => {
    console.log('App listening on: http://localhost:8080');
});
