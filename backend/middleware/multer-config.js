const multer = require('multer'); // Importing the multer module

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png'
};

// Configuring the storage for multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images'); // Setting the destination directory for uploaded images
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_'); // Modifying the original filename to remove spaces
    const extension = MIME_TYPES[file.mimetype]; // Getting the file extension based on the MIME type
    callback(null, name + Date.now() + '.' + extension); // Generating a unique filename with the extension
  }
});

module.exports = multer({storage: storage}).single('image');
