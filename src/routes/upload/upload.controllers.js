const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

/**
 * @Desc Will give us access to a pre-signed URL.
 * @Details aws.amazon.com/sdk-for-node-js
 */
const s3 = new AWS.S3({
  accessKeyId: 'AKIATJLQEXCJTB6WZPQG',
  secretAccessKey: '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'
});

exports.uploadImage = (req, res) => {
  // TODO: Hard coded file extension.
  const key = `${req.user.id}/${uuid()}.jpeg`;

  s3.getSignedUrl(
    'putObject',
    {
      Bucket: 'meal-prep-images',
      ContentType: 'image/jpeg',
      Key: key
    },
    (err, url) => res.send({ key, url })
  );
};
