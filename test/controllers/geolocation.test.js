const assert = require('assert');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  xit('Should get driver by location', async () => {
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
