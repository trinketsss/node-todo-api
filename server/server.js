const express = require('express'),
      bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//configure parser middleware
app.use(bodyParser.json());

//POST route
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

//GET route
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
      res.send({todos})
  }),(err)=>{
    res.status(400).send(err);
  }
});

//server listener
app.listen(3000,()=>{
  console.log('server started on port 3000');
});

module.exports = {app};
