import axios from 'axios';
import { toast } from 'react-toastify';

// Function to register a new user
export function Register(userData, navigate) {
  console.log(userData);
  // Making a POST request to the signup endpoint
  axios.post("http://localhost:3001/api/auth/signup", {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
  }).then((response) => {
    // Navigating to the home page and displaying a toast message on successful registration
    navigate("/");
    setTimeout(() => {
      toast(userData.firstName + " a bien été créé");
    }, 1000);
  }).catch((e) => {
    // Displaying an error message on registration failure
    console.log(e.response.data);
    toast(JSON.stringify(e.response.data.error.errors[0].message));
  });
};
