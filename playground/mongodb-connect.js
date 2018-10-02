//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  db.collection('Users').insertOne({
    //_id:123,
    name: 'mohamed gaber',
    age: 22,
    location: 'elmahalla'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.close();
});
