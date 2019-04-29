const assert = require('assert');
const request = require('supertest');

const app = require('../../src');
const User = require('../../src/models/user/user');

describe('/auth controllers', () => {
  describe('POST /signup', () => {
    it('Should create/signup a new user', async () => {
      const res = await request(app)
        .post('/signup')
        .send({
          email: 'test@auth.com',
          password: 'P@ssword',
          name: 'testUser'
        });
      assert(res.status === 200);
      assert(typeof res.body.token === 'string');
    });
  });

  describe('POST /signin', () => {
    it('Should signin a user and return a token', async () => {
      const password = 'P@ssword';
      const newUser = await new User({
        password,
        name: 'testUser',
        email: 'test@auth.com'
      }).save();

      const res = await request(app)
        .post('/signin')
        .send({
          password,
          email: newUser.email
        });

      assert(res.body.user._id === newUser._id.toString());
      assert('token' in res.body);
    });
  });
});
