const fs = require('fs');
const express = require('express');
const expressApp = express();
var Markov = require('markov-respond');
var m = new Markov();

var s = fs.readFileSync(__dirname + '/input.txt');
m.train(s);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

expressApp.get('/say/:num', (req, res) => {
  var num = req.params.num || getRandomArbitrary(8, 100);
  if (!Number.isSafeInteger(parseInt(num))) {
    return res.send("");
  }
  var message = m.respond('', num);
  return res.send(message);
});

expressApp.get('/say/', (req, res) => {
  var num = req.params.num || getRandomArbitrary(8, 100);
  if (!Number.isSafeInteger(parseInt(num))) {
    return res.send("");
  }
  var message = m.respond('', num);
  return res.send(message);
});


expressApp.listen(8888, () => {
  console.log('Franksay listen on port 8888!');
});
