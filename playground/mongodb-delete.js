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
  //deletemany
  // db.collection('todos').deleteMany({text:'go for run'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteone
  // db.collection('todos').deleteOne({todo:'run again'}).then((result)=>{
  //   console.log(result)
  // })
  //findoneanddelete
  // db.collection('todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })
  //challenge:
  db.collection('users').deleteMany({name:'Jason'}).then((result)=>{
    console.log(result);
  });
  db.collection('users').findOneAndDelete({_id:ObjectId('5bebf76ed57587041965b9b4')}).then((result)=>{
    console.log(result);
  })
  // client.close();
});
