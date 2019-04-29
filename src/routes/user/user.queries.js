const User = require('../../models/user/user');

exports.getUserByLocation = async (lng, lat) =>
  User.find({
    geometry: {
      $near: {
        $geometry: { type: 'Point', coordinates: [lng, lat] },
        $minDistance: 0,
        $maxDistance: 3000
      }
    }
  });

exports.getUser = _id => User.findOne({ _id });

exports.editUser = async (_id, userProps) => {
  await User.findByIdAndUpdate({ _id }, userProps);
  return User.findById(_id);
};

exports.deleteUser = _id => User.findByIdAndDelete(_id);
