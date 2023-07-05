const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken module
const User = require('../models/user'); // Importing the User model

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Extracting the token from the Authorization header
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // Verifying the token using the secret key
    req.token = decodedToken; // Storing the decoded token in the request object
    const user = await User.findOne({ where: { id: decodedToken.id } }); // Finding the user based on the decoded token
    if (!user) {
      throw 'Invalid user ID'; // Throwing an error if the user is not found
    } else {
      req.user = user; // Storing the user object in the request object
      next(); // Proceeding to the next middleware
    }
  } catch {
    res.status(401).json({
      error: new Error('Token incorrecte!')
    });
  }
};
