const User = require('../../models/user/user');

exports.editUser = async (_id, userProps) => {
  await User.findByIdAndUpdate({ _id }, userProps);
  return User.findById(_id);
};
