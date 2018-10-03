//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb01812cd7dd50b245b7adf')
  // }, {
  //   $set: {
  //     name: 'gaber'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('Unable to update', err)
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb018a5d686d809784a7dbd')
  }, {
    $set: {
      name: 'mohamed gaber'
    },
    $inc: {
      age : 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  }, (err) => {
    console.log('Unable to update', err)
  });

//db.close();
});
