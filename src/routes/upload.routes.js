const { requireAuth } = require('../middlewares/passport');
const { uploadImage } = require('../controllers/upload.controllers');

module.exports = app => {
  app.get('/api/upload', requireAuth, uploadImage);
};
