
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB Server');
  }
  console.log(`Connected to MongoDB server: ${db}`);

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Tamil'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to delete Many due to ${err}`);
  // })
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log('Unable to delete one');
  //   });
  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a63d4e6a4c985708fda06ea')})
    .then((result) => {
      console.log(result);
    }, (err) => {
      console.log('Unable to delete one');
    });

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to delete Many due to ${err}`);
  // })
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log('Unable to delete one');
  //   });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log('Unable to delete one');
  //   });


//  db.close();
});
