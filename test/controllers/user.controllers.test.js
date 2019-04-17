const assert = require('assert');
const request = require('supertest');

const app = require('../../src');
const User = require('../../src/models/user/user');

describe('User controllers', () => {
  describe('GET to /users', () => {
    it.only('Should get users by location', async () => {
      const newUser = new User({
        name: 'dallas',
        email: 'dallas@test.com',
        password: 'P@ssword',
        geometry: { type: 'Point', coordinates: [-96.81151, 33.099306] }
      });

      await newUser.save();
      const nearUsersRes = await request(app).get(
        '/users?lng=-96.811510&lat=33.099306'
      );
      // console.log({ newUser: nearUsers.body });
      assert(nearUsersRes.body.length > 0)
    });
  });

  describe('PUT to /users/:id (edit/update)', () => {
    it('Should update a property of an existing user', async () => {
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

  describe('DELETE to /users/:id', () => {
    it('Should remove an existing user by id', async () => {
      const user = new User({
        email: 'testdelete@gmail.com',
        password: 'P@ssword',
        name: 'test'
      });
      await user.save();
      const deletedUserRes = await request(app).delete(`/users/${user._id}`);
      assert(deletedUserRes.body.email === user.email);
    });
  });
});
