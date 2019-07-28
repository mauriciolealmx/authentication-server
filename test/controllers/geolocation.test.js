const assert = require('assert');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const { STONE_BRIAR_MALL, IKEA, THE_SHOPS_AT_LEGACY, DIANAS } = require('../locations.data');

const app = require('../../src');
const User = require('../../src/models/user/user');

//
const PointSchema = new Schema({
  type: { type: String, default: 'Point', required: true },
  coordinates: { type: [Number], required: true }
});

const driverSchema = new Schema({
  email: { type: String },
  geometry: { type: PointSchema, index: '2dsphere' }
});

const Driver = mongoose.model('driver', driverSchema);

describe('Driver testing', () => {
  it('Should get driver by location', async () => {
    const newDriver = new Driver({
      email: 'dallas4@driver.com',
      geometry: { type: 'Point', coordinates: [-80.811245, 33.099826] }
    });
    await newDriver.save();

    const nearDriverRes = await Driver.find({
      geometry: {
        $near: {
          $geometry: { type: 'Point', coordinates: [-96.799854, 33.106604] },
          $minDistance: 0,
          $maxDistance: 3000
        }
      }
    });
    console.log({ nearDriverRes });
  });
});

describe('Near Meal', () => {
  it('Should get Meals near the "Diner" user', async () => {
    // Setting up local Cooks.
    const theShops = new User({
      email: 'the.shops.at.legacy@cook.com',
      password: 'P@ssword',
      geometry: { type: 'Point', coordinates: THE_SHOPS_AT_LEGACY }
    });

    const dianas = new User({
      email: 'dianas@cook.com',
      password: 'P@ssword',
      geometry: { type: 'Point', coordinates: DIANAS }
    });

    await Promise.all([theShops.save(), dianas.save()])

    const nearCooks = await User.find({
      geometry: {
        $near: {
          $geometry: { type: 'Point', coordinates: IKEA },
          $minDistance: 0,
          $maxDistance: 2500
        }
      }
    });
    console.log({ nearCooks });
  });
});
