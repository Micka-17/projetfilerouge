// Importing the required dependencies
import axios from 'axios';
import { toast } from 'react-toastify';

// Defining the Login function that takes userData and navigate as parameters
export default function Login(userData, navigate) {
  // Making a POST request to the login endpoint with the user's email and password
  axios
    .post("http://localhost:3001/api/auth/login", {
      email: userData.email,
      password: userData.password,
    })
    .then((response) => {
      // If the login request is successful
      // Store the received token in the local storage
      localStorage.setItem('token', response.data.token);
      // Navigate to the '/accueil' route
      navigate('/accueil');
      // Show a toast message after a delay of 1 second to indicate successful login
      setTimeout(() => {
        toast(" Vous êtes bien connecté !");
      }, 1000);
    })
    .catch((e) => {
      // If an error occurs during the login request
      // Show a toast message indicating that the user was not found
      toast("Utilisateur non trouvé");
    });
};