const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../src');

const { populateMeals, populateUsers } = require('../dbPopulate.helper');
const usersMockData = require('../../dummyData/users/users');

const User = mongoose.model('user');
const Meal = mongoose.model('meal');

describe('/meal controllers', () => {
  describe('GET /meals', () => {
    it('Should get a list of all meals', async () => {
      // TODO: Should generate a token without the signin process.

      const password = 'P@ssword';
      const newUser = new User({
        password,
        name: 'test',
        email: 'test@getmeals.com'
      });

      const newMeal = new Meal({
        description: 'Meal description',
        title: 'Meal title',
        user: newUser._id
      });

      await Promise.all([newUser.save(), newMeal.save()]);

      const signedinUserRes = await request(app)
        .post('/signin')
        .send({
          email: newUser.email,
          password: password
        });

      const JWT = signedinUserRes.body.token;

      const mealsRes = await request(app)
        .get('/meals')
        .set('Authorization', JWT);

      assert(mealsRes.body.length > 0);
      assert(mealsRes.body.some(meal => meal.title === newMeal.title));
    });
  });

  describe('GET /meals?lng&lat&maxDistance', () => {
    it.only('Should find the nearest meals to diner', async () => {
      await Promise.all[(populateMeals(), populateUsers())];

      const { email, geometry } = usersMockData[0];
      const [lng, lat] = geometry.coordinates;

      const signedinUserRes = await request(app)
        .post('/signin')
        .send({ email, password: 'P@ssword' });

      const JWT = signedinUserRes.body.token;
      const mealsRes = await request(app)
        .get(`/meals?lng=${lng}&lat=${lat}&maxDistance=${5000}`)
        .set('Authorization', JWT);

      assert(mealsRes.body.length === 3);
    });
  });
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
