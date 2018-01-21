//const MongoClient = require('mongodb').MongoClient;

// or
const {MongoClient, ObjectID} = require('mongodb');

// Object destructuring
// var user = {name: 'Tamil', age: 40};
// var {name, age} = user;
// console.log(name);
// console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB Server');
  }
  console.log(`Connected to MongoDB server: ${db}`);


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //   return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Tamil',
  //   age: 40,
  //   location: 'Portland'
  // }, (err, result) => {
  //   if (err){
  //   return console.log('Unable to insert user', err)
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
