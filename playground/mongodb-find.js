//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

// db.collection('Todos').find({
//   _id: new ObjectID('5bb01812cd7dd50b245b7adf')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch data', err);
// });

// db.collection('Todos').find().count().then((docs) => {
//   console.log(`count: ${docs}`);
// }, (err) => {
//   console.log('Unable to count data', err);
// });

db.collection('Users').find({name : 'mohamed gaber'}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch data', err);
});

db.close();
});
