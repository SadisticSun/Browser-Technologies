const express           = require('express');
const path              = require('path');
const request           = require('request');
const bodyParser        = require('body-parser');
const app               = express();
const compression       = require('compression');
const server            = require('http').createServer(app);
const io                = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())
app.set('port', (8080));
app.set('view engine', 'ejs');

var pollInformation = {}

io.on('connection', function (socket) {
  // Connect
  console.log('[Server] New User Connected: %s user(s) connected');

  socket.on('answer1', function () {
    console.log('Iemand gaf antwoord 1');
    io.emit('updateAnswer1')
  })

  socket.on('answer2', function () {
    console.log('Iemand gaf antwoord 2');
    io.emit('updateAnswer2')
  })

  // Disconnect
  socket.on('disconnect', function () {
    console.log('[Server] Disconnected: %s user(s) still connected');
  });
});

app.get('/', (req, res) => {
    res.render('index', {} );
});

app.post('/', (req, res) => {

  var fields                    = req.body;
  pollInformation.pollName      = fields.pollName;
  pollInformation.pollQuestion  = fields.pollQuestion;
  pollInformation.pollAnswer1   = fields.pollAnswer1;
  pollInformation.pollAnswer2   = fields.pollAnswer2;

  console.log(pollInformation);

  res.redirect(`/results/${pollInformation.pollName}`);
});

app.get(`/:${pollInformation.pollName}`, (req, res) => {
  console.log(pollInformation.pollName);
  res.render('answer', {pollData: pollInformation});
})

app.get(`/results/:${pollInformation.pollName}`, (req, res) => {
  res.render('results', {pollData: pollInformation});
});

server.listen(app.get('port'), () => {
    console.log('App listening on: http://localhost:8080');
});
