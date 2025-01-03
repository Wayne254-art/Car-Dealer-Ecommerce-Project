const multer = require('multer');
const crypto = require('crypto');

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const extension = path.extname(file.originalname);
    const listingMake = req.body.listingMake ? req.body.listingMake.replace(/\s+/g, '-') : 'unknown';
    cb(null, `${listingMake}-${uniqueSuffix}${extension}`);
    console.log('req.body:', req.body);  // Debug log
  }
});

const upload = multer({ storage: storage });

module.exports = upload.fields([
  { name: 'listingImages', maxCount: 15 },
  { name: 'listingAttachments', maxCount: 10 }
]);
