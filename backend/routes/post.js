const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth'); // Importing the authentication middleware
const multer = require('../middleware/multer-config'); // Importing the multer configuration middleware
const postCtrl = require('../controllers/post'); // Importing the post controller

router.get('/', auth, postCtrl.getAllPost); // Route to get all posts, requiring authentication

router.get('/:id', auth, postCtrl.getOnePost); // Route to get a specific post by ID, requiring authentication

router.post('/post', auth, multer, postCtrl.createPost); // Route to create a new post, requiring authentication and multer middleware for file uploads

router.put('/:id', auth, postCtrl.modifyPost); // Route to update a post by ID, requiring authentication

router.delete('/:id', auth, postCtrl.deletePost); // Route to delete a post by ID, requiring authentication

// router.post('/:id/like', auth, postCtrl.likePost); // Route to like a post by ID, requiring authentication

module.exports = router; // Exporting the router