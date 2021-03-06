const {
  deleteUser,
  editUser,
  getUser,
  getUserByLocation,
} = require('./user.queries');

exports.index = async (req, res) => {
  const { lng, lat } = req.query;
  const usersByLocation = await getUserByLocation(Number(lng), Number(lat));
  res.status(200).send(usersByLocation);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await getUser(id);
  res.status(200).send(user);
};

exports.edit = async (req, res) => {
  const { id } = req.params;

  await editUser(id, req.body);
  res.status(200).json({ success: true });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.status(200).send(deletedUser);
};
