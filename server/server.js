var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
var todo = new Todo({
  text: req.body.text
});

todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
  res.status(400).send(e);
});
});

app.listen(3000, () => {
  console.log('started on port 3000');
});

module.exports = {app};



// var newtodo = new Todo({
//   text: "cook dinner"
// });
//
// newtodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (err) => {
//   console.log('unable to save todo');
// });
//
// var othertodo = new Todo({
//   text: 'feed the cat',
//   completed: true,
//   completedAt: 123
// });
//
// othertodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to save todo', e)
// });


//
// var saveUser = new User({
//   email: 'mohamed gaber'
// });
//
// }, (e) => {
//   console.log('unable to save todo', e);
// });
