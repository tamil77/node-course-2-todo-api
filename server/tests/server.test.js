const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
  text: 'First todo'
}, {
  text: 'Second todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
  User.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
          if (err) {
            return done(err);
          }

          Todo.find({text}).then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e));
      })
  });

  it('should not create todo with invalid body data', (done) => {
    var text = '1234';

    request(app)
      .post('/todos')
      .send({text})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      })
  });
});

describe('POST /users', () => {
  it('should create a user with valid email', (done) => {
    var email = 'email@email.us';

    request(app)
      .post('/users')
      .send({email})
      .expect(200)
      .expect((res) => {
        expect(res.body.email).toContain('@');
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find().then((users) => {
          expect(users.length).toBe(1);
          done();
        }).catch((e) => done(e));
      })
  });

  describe('GET /todos', () => {
    it('Should get all todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
  });
});
