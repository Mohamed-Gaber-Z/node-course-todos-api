//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  //deleteMany
// db.collection('Todos').deleteMany({name: 'mahmoud gaber'}).then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('Unable to delete that data', err);
// });

// deleteOne
// db.collection('Todos').deleteOne({name: 'mahmoud gaber'}).then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('Unable to delete that data', err)
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({name: 'mahmoud gaber'}).then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('Unable to delete that data', err);
// });

db.collection('Users').deleteMany({name: 'mohamed gaber'});
db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb40025193e5e58de8b7697')}).then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
  console.log('Unable to find that data', err);
});

//db.close();
});
