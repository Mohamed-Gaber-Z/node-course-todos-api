const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5bbc04a302576fac14995dac';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not found');
// }
//
// Todo.find({
//   _id : id
// }).then((res) => {
//   console.log(res);
// });
//
// Todo.findOne({
//   _id : id
// }).then((res) => {
//   console.log(res);
// });
//
// Todo.findById(id).then((res) => {
//   if (!res) {
//     console.log('ID not found')
//   }
//   console.log(res);
// }).catch((e) => console.log(e));

var id = '5bb7e62b53a278c00d6e280b';

User.findById(id).then((res) => {
  if (!res) {
    console.log('ID not found');
  }
  console.log(res);
}).catch((e) => console.log(e));
