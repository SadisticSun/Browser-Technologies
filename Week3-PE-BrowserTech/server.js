const express           = require('express');
const path              = require('path');
const request           = require('request');
const bodyParser        = require('body-parser');
const app               = express();
const compression       = require('compression');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())
app.set('port', (8080));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {} );
});

app.post('/', (req, res) => {
  let fields = req.body;
  console.log(fields);
  res.redirect('/results');
});

app.get('/results', (req, res) => {
  res.render('results');
})

app.listen(app.get('port'), () => {
    console.log('App listening on: http://localhost:8080');
});
