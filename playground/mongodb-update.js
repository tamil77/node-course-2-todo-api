
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB Server');
  }
  console.log(`Connected to MongoDB server: ${db}`);

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a63e572588b80167fa40c3c')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    name: 'Shravan'
  }, {
     $set: {name : 'Sahana'}, $inc: {age : 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});
