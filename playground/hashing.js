const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});
var hashedPassword = '$2a$10$zata4ZzNT0bqyyTE.riUgOgZLRWxE06kKCj0RChKNaphN1lSzPgSm';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data  = {
//   id: 10
// }
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decode = jwt.verify(token, '123abc');
// console.log(decode);

// var message = 'i am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hashind: ${hash}`);
//
// var data = {
//   id: 4
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'some secret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();
//
// if (resultHash === token.hash) {
//   console.log('data was not change');
// } else {
//   console.log('data was change. dont trust');
// }
