const expect = require('expect'),
      request = require('supertest');

const {app} = require('./../server'),
      {Todo} = require('./../models/todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});

describe('POST /todos',()=>{
  it('should create new todo',(done)=>{
    var text = 'test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err)=>{
      return done(err)
    })
    Todo.find().then((todos)=>{
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe(text);
      done();
    }).catch((err)=>done(err));

  });
});
