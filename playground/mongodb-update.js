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
  //findOneAndUpdate
  // db.collection('todos').findOneAndUpdate({
  //   _id:ObjectId('5bed48f4749f2651b03a162c')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });
  //test
  db.collection('users').findOneAndUpdate({
    name:'Jason'
  },{
    $set:{
      name:'Jason'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  })
  // client.close();
});
