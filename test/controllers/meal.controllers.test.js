const assert = require('assert');
const request = require('supertest');
const app = require('../../src');
const mongoose = require('mongoose');

const User = mongoose.model('user');
const Meal = mongoose.model('meal');

describe('/meal controllers', () => {
  describe('GET /meals', () => {
    it('Should get a list of meals', async () => {
      // TODO: Should generate a token without the signin process.
      const userData = {
        name: 'test',
        email: 'test@getmeals.com',
        password: 'P@ssword'
      };
      const newUser = new User(userData);
      await newUser.save();

      const mealData = {
        description: 'Meal description',
        title: 'Meal title',
        user: newUser._id
      };
      await new Meal(mealData).save();

      const signedinUserRes = await request(app)
        .post('/signin')
        .send({
          email: userData.email,
          password: userData.password
        });

      const JWT = signedinUserRes.body.token;

      const mealsRes = await request(app)
        .get('/meals')
        .set('Authorization', JWT);

      assert(mealsRes.body.length > 0);
      assert(mealsRes.body.some(meal => meal.title === mealData.title));
    });
  });
});
