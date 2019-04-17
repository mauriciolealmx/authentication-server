const assert = require('assert');
const request = require('supertest');

const app = require('../../src');

describe('Auth controllers', () => {
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
      const res = await request(app)
        .post('/signin')
        .send({
          email: 'test@gmail.com',
          password: 'P@ssword'
        });
        
      console.log({ res: res.body });
    });
  });
});
