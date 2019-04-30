/**
 * Got Random Users from:
 * fetch('https://randomuser.me/api/?results=20&gender=female&inc=name,email,picture,location').then(res => res.json()).then(console.log)
 */

const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://emdbAdmin:emdbAdmin@email-marketing-kcs7f.mongodb.net/address-book-test?retryWrites=true';

before(async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
  });
  mongoose.connection.on('open', () => console.log('Connected to mongodb'));
});

beforeEach(async () => {
  const { users, meals } = mongoose.connection.collections;
  await Promise.all([
    users.deleteMany(), 
    meals.deleteMany()
  ]);

  // Creates indexes if they don't exist yet.
  users.createIndex({ geometry: '2dsphere' });
  meals.createIndex({ geometry: '2dsphere' });

  console.log(`
    ------------------------
    Deleting Users and Meals
    ------------------------
  `);
});
