const assert = require('assert');
const request = require('supertest');

const app = require('../../src');
const User = require('../../src/models/user/user');

describe('User controllers', () => {
  // PUT to /users/:id
  it.only('Should update a property of an existing user', async () => {
    const user = new User({
      email: 'testUpdate@gmail.com',
      password: 'P@ssword',
      name: 'test'
    });
    await user.save();

    // Make request to edit/update.
    await request(app)
      .put(`/users/${user._id}`)
      .send({ name: 'newname' });

    // Get the saved user.
    const res = await User.findOne({ email: 'testUpdate@gmail.com' });
    assert(res.name === 'newname');
  });
});
