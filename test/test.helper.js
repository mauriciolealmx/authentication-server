const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://emdbAdmin:emdbAdmin@email-marketing-kcs7f.mongodb.net/address-book-test?retryWrites=true';

before(async () => {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
});

beforeEach(async () => {
  console.log(`
    --------------
    Dropping users
    --------------
  `);

  const { users } = mongoose.connection.collections;
  await users.drop();
});
