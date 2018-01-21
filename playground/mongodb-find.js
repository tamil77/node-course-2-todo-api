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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a63d774588b80167fa40635')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({name: 'Tamil'}).toArray().then((docs) => {
    console.log(`Users`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });

//  db.close();
});
