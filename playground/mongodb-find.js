// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoApp',(err, client)=>{
  if(err){
    return console.log('unable to connect to db server');
  }
  console.log('connected to db server');
  const db = client.db('todoApp');

  // db.collection('todos').find().count().then((count)=>{
  //   console.log(`todos count: ${count}`);
  //
  // },(err)=>{
  //   console.log(err);
  // });
  db.collection('users').find({name:'Jason'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  })
  // client.close();
});
