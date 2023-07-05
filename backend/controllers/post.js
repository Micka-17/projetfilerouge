const Post = require('../models/post'); // Importing the Post model
const User = require('../models/user'); // Importing the User model
const fs = require('fs'); // Importing the fs module for file system operations

// Get all posts with the associated user
exports.getAllPost = (req, res, next) => {
  Post.findAll({
    include: ["user"] // Including the "user" association in the query result
  })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};

// Get a single post by ID
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id }) // Finding a post with the specified ID
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};

// Create a new post
exports.createPost = (req, res, next) => {
  User.findOne({
    attributes: ["id", "email", "lastName", "firstName", "isAdmin", "avatar", "password"],
    where: {
      id: req.token.id // Finding the user associated with the provided token ID
    }
  });
  
  console.log("req.user.id                                    ");
  console.log(req.user);
  
  // Creating a new Post object with the provided data
  const post = new Post({
    User_Id: req.user.id, // Associating the post with the user's ID
    title: req.body.title,
    description: req.body.description,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // Constructing the image URL using protocol, host, and file name
  });

  // Saving the post to the database
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistrée !' }))
    .catch(error => {
      console.log(({ error }));
      res.status(400).json({ error });
    });
};

// Update an existing post
exports.modifyPost = (req, res, next) => {
  if (req.file) {
    // If the image is modified, delete the old image from the /images directory
    Post.findOne({ _id: req.params.id })
      .then(post => {
        const filename = post.imageUrl.split('/images/')[1]; // Extracting the file name from the image URL
        fs.unlink(__dirname + `/../images/${filename}`, () => {
          // Once the old image is deleted, update the post with the new data
          const postObject = {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // Constructing the new image URL
          }
          Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id }) // Updating the post with the new data
            .then(() => res.status(200).json({ message: 'Post modifiée!' }))
            .catch(error => res.status(400).json({ error }));
        })
      })
      .catch(error => res.status(500).json({ error }));
  } else {
    // If the image is not modified, update the post with the provided data
    const postObject = { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Post modifiée!' }))
      .catch(error => res.status(400).json({ error }));
  }
};

// Delete a post
exports.deletePost = (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((Delete) => {
    console.log(Delete);
    if (req.token.id == Delete.User_Id || req.token.id == 1 ) {
      const filename = Delete.imageUrl.split('/images/')[1]; // Extracting the file name from the image URL
      fs.unlink(__dirname + `/../images/${filename}`, () => {
        // Once the associated image is deleted, remove the post from the database
        Post.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Post supprimée !' }))
          .catch(error => res.status(400).json({ error: error.message }));
      });
    } else {
      return res.status(401).json({ error: 'Ce n\'est pas ton post !!!' });
    }
  });
};
