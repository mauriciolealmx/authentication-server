const { editUser } = require('./user.queries');

exports.edit = async (req, res) => {
  const { id } = req.params;

  await editUser(id, req.body);
  res.status(200).json({ success: true });
};
