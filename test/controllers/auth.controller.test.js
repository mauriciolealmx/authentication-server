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
      const userData = {
        name: 'testUser',
        email: 'test@auth.com',
        password: 'P@ssword'
      };

      await new User(userData).save();

      const res = await request(app)
        .post('/signin')
        .send({
          email: userData.email,
          password: userData.password
        });
      assert('token' in res.body);
      assert(typeof res.body.token === 'string');
    });
  });
});
