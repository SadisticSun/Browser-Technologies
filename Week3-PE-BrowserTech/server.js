const express           = require('express');
const path              = require('path');
const request           = require('request');
const bodyParser        = require('body-parser');
const app               = express();
const compression       = require('compression');
const server            = require('http').createServer(app);
const io                = require('socket.io').listen(server);

server.listen(8080, () => {
    console.log('App listening on: http://localhost:8080');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())
app.set('view engine', 'ejs');

var pollInformation = {
  pollName: '',
  pollURL: '',
  pollQuestion: '',
  pollAnswers: [
    { name: '' },
    { name: '' }
  ]
}
var results = {
  answerCounter: [
    { answerCount: 0 },
    { answerCount: 0 }
  ]
};

io.on('connection', function (socket) {
  // Connect
  console.log('[Server] New user connected');

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
    console.log('[Server] User disconnected.');
  });
});

app.get('/', (req, res) => {
    res.render('index', {} );
});

app.get('/thankyou', (req, res) => {
    res.render('thanks');
});

app.post('/', (req, res) => {
  var fullUrl                           = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  var fields                            = req.body;
  pollInformation.pollName              = fields.pollName;
  pollInformation.pollURL               = `${fullUrl}${pollInformation.pollName}`;
  pollInformation.pollQuestion          = fields.pollQuestion;
  pollInformation.pollAnswers[0].name   = fields.pollAnswer1;
  pollInformation.pollAnswers[1].name   = fields.pollAnswer2;

  console.log(pollInformation);
  res.redirect(`/results/${pollInformation.pollName}`);
});

app.get(`/:id`, (req, res) => {
  console.log(pollInformation.pollName);
  res.render('answer', {pollData: pollInformation});
});

app.post(`/:id`, (req, res) => {
  if (req.body.answer === pollInformation.pollAnswers[0].name) {
    results.answerCounter[0].answerCount++;
    console.log('Added 1 to answer 1');
    console.log(results);
  } else if (req.body.answer === pollInformation.pollAnswers[1].name) {
    results.answerCounter[1].answerCount++;
    console.log('Added 1 to answer 2');
    console.log(results);
  }
  // results[req.body.answer] = results[req.body.answer] ? results[req.body.answer] + 1 : 1;
  res.redirect('/thankyou');
});

app.get('/results/:id', (req, res) => {
  console.log('rendered results');
  res.render('results', {
    pollData: pollInformation,
    results: results
  });
});
