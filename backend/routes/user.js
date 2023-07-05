const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth"); // Importing the authentication middleware
const userCtrl = require('../controllers/user'); // Importing the user controller

router.post('/signup', userCtrl.signup); // Route to handle user signup

router.post('/login', userCtrl.login); // Route to handle user login

router.get('/account', auth, userCtrl.getOneUser); // Route to get user account details, requiring authentication

router.put('/user', auth, userCtrl.modifyUser); // Route to update user details, requiring authentication

router.get('/users', auth, userCtrl.getAllUser); // Route to get all users, requiring authentication

router.delete('/delete', auth, userCtrl.deleteUser); // Route to delete the authenticated user

router.put('/manageuser/:id', auth, userCtrl.modifyUserById); // Route to update a user by ID, requiring authentication

router.delete('/manageuser/:id', auth, userCtrl.deleteUserById); // Route to delete a user by ID, requiring authentication

module.exports = router; // Exporting the router