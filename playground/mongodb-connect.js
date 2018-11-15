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

  // db.collection('todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  //new doc into users with name,age,location
  // db.collection('users').insertOne({
  //   name:'Jason',
  //   age:21,
  //   location:'Australia'
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();
});
