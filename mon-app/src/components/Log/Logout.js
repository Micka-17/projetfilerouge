// Importing the required dependency
import { toast } from 'react-toastify';

// Defining the Logout function that takes navigate as a parameter
export default function Logout(navigate) {
  // Retrieving the token from the local storage (Note: the value is not assigned to a variable, so it has no effect)
  localStorage.getItem('token');
  // Removing the token from the local storage
  localStorage.removeItem('token');
  // Navigating to the '/accueil' route
  navigate('/accueil');
  // Show a toast message after a delay of 1 second to indicate successful logout
  setTimeout(() => {
    toast(" Vous êtes bien déconnecté !");
  }, 1000);
};
