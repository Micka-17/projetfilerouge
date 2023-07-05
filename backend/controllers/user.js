const bcrypt = require('bcrypt'); // Importing the bcrypt module for password hashing
const User = require('../models/user'); // Importing the User model
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken module
const Post = require('../models/post'); // Importing the Post model

// User signup
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bio: req.body.bio,
        email: req.body.email,
        password: hash,
        isModo: false,
        isAdmin: false,
        isSuperAdmin: false,
      });

      const token = "Bearer " + jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "2H" }); // Generating a token for the user

      user.save()
        .then(() => res.status(201).json({
          message: 'Utilisateur créé !',
          token,
          user_id: user.id,
          email: user.email,
          username: user.username,
          bio: user.bio,
          isModo: user.isModo,
          isAdmin: user.isAdmin,
          isSuperAdmin: user.isSuperAdmin,
          role: user.role,
          token
        }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json(console.log(error)));
};

// User login
exports.login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(400).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            id: user.id,
            token: jwt.sign(
              { id: user.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '2h' }
            )
          });
        })
        .catch(error => res.status(501).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Get user by ID
exports.getOneUser = (req, res, next) => {
  User.findOne({
    attributes: ["id", "email", "lastName", "firstName", "bio", "isModo", "isAdmin", "isSuperAdmin", "avatar", "password"],
    where: {
      id: req.token.id
    }
  }).then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};

// Delete a user
exports.deleteUser = (req, res, next) => {
  const posts = Post.destroy({
    where: {
      User_Id: req.token.id
    }
  }).then(() => {
    return User.destroy({ where: { id: req.token.id } });
  }).then(() => {
    res.status(200).json({ messageRetour: "utilisateur supprimé" });
  });
};

// Update a user
exports.modifyUser = (req, res, next) => {
  if (req.file) {
    // If the image is modified, delete the old image from the /images directory
    User.findOne({ _id: req.params.id })
      .then(user => {
        const filename = user.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          // Once the old image is deleted from the /images directory, update the rest
          const userObject = {
            ...JSON.parse(req.body.user),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
          };
          User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'user modifiée!' }))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  } else {
    // If the image is not modified
    const userObject = { ...req.body };
    User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'user modifiée!' }))
      .catch(error => res.status(400).json({ error }));
  }
};

// Get all users
exports.getAllUser = (req, res, next) => {
  User.findAll({}).then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};

// Delete a user by ID
exports.deleteUserById = (req, res, next) => {
  const userId = req.params.id;
  User.destroy({
    where: {
      id: userId
    }
  })
    .then(() => res.status(200).json({ message: "Utilisateur supprimé avec succès" }))
    .catch(error => res.status(500).json({ error }));
};

// Update a user by ID
exports.modifyUserById = (req, res, next) => {
  const userId = req.params.id;
  console.log(userId);
  if (req.file) {
    // If the image is modified, delete the old image from the /images directory
    User.findByPk(userId)
      .then(user => {
        if (user.imageUrl) {
          const filename = user.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            // Once the old image is deleted from the /images directory, update the rest
            const updatedUser = {
              ...req.body,
              imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            };
            updateUser(userId, updatedUser, res);
          });
        } else {
          // If the user doesn't have an old image, directly update the rest
          const updatedUser = {
            ...req.body,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
          };
          updateUser(userId, updatedUser, res);
        }
      })
      .catch(error => res.status(500).json({ error }));
  } else {
    // If the image is not modified
    const updatedUser = { ...req.body };
    updateUser(userId, updatedUser, res);
  }
};

// Function to update the user in the database
const updateUser = (userId, updatedUser, res) => {
  User.update(updatedUser, {
    where: {
      id: userId
    }
  })
    .then(() => res.status(200).json({ message: "Utilisateur modifié avec succès" }))
    .catch(error => res.status(500).json({ error }));
};
