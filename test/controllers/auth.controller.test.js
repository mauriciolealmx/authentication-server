const assert = require('assert');
const request = require('supertest');

const app = require('../../src');
const User = require('../../src/models/user/user');

describe('/auth controllers', () => {
  describe('POST to /signup', () => {
    it('Should create/signup a new user', async () => {
      const res = await request(app)
        .post('/signup')
        .send({
          email: 'test@gmail.com',
          password: 'P@ssword',
          name: 'testUser'
        });
      assert(res.status === 200);
      assert(typeof res.body.token === 'string');
    });
  });

  describe('POST to /signin', () => {
    it('Should signin a user and return a token', async () => {
      const testUser = {
        name: 'testUser',
        email: 'test@test.com',
        password: 'P@ssword'
      };

      await new User(testUser).save();

      const res = await request(app)
        .post('/signin')
        .send({
          email: testUser.email,
          password: testUser.password
        });
      assert('token' in res.body);
      assert(typeof res.body.token === 'string');
    });
  });
});
