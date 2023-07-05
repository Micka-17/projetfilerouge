const User = require("./user"); // Importing the User model
const Post = require("./Post"); // Importing the Post model

const loadModel = async () => {
  await Post.belongsTo(User, {
    foreignKey: "User_Id",
    onDelete: "cascade"
  });
};

module.exports = {
  loadModel, // Exporting the loadModel function
  User, // Exporting the User model
  Post, // Exporting the Post model
};
