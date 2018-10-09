const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//findOneAndRemove
//findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bbce7edb4e18ab9dab8002b'}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5bbce898b4e18ab9dab80053').then((res) => {
  console.log(res);
});
