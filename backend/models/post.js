"use strict";
const DataTypes = require("sequelize"); // Importing the DataTypes from Sequelize
const User = require('./user'); // Importing the User model
const sequelize = require("../models/connexion"); // Importing the Sequelize instance

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  User_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    required: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    required: false,
  },
  comment: {
    type: DataTypes.STRING,
    required: false,
    allowNull: true,
  }
});

Post.belongsTo(User, {
  as: "user",
  foreignKey: "User_Id"
});

User.hasMany(Post, {
  as: "posts"
});

console.log(Post === sequelize.models.Post); // Checking if the Post model is correctly associated with the Sequelize instance

module.exports = Post; // Exporting the Post model
