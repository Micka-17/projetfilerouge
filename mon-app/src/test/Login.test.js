import Login from '../components/Log/Login';
import axios from 'axios';
import { toast } from 'react-toastify';

// Mocking axios and react-toastify
jest.mock('axios');
jest.mock('react-toastify', () => ({
  toast: jest.fn()
}));

// Using fake timers for setTimeout
jest.useFakeTimers();

describe('Login function', () => {
  it('should call the login API and set the token in local storage when successful', async () => {
    // Mocking the response from the login API
    const mockResponse = { data: { token: 'test_token' } };
    axios.post.mockResolvedValueOnce(mockResponse);

    // Setting up test data
    const userData = { email: 'test@example.com', password: 'test_password' };
    const navigate = jest.fn();

    // Spying on localStorage.setItem to check if token is set
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

    // Calling the Login function
    await Login(userData, navigate);

    // Expectations

    // Checking if the login API was called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/auth/login', {
      email: 'test@example.com',
      password: 'test_password'
    });

    // Checking if the token is set in local storage
    expect(localStorageSpy).toHaveBeenCalledWith('token', 'test_token');

    // Checking if the navigate function is called with the correct path
    expect(navigate).toHaveBeenCalledWith('/accueil');

    // Fast-forwarding the timers to trigger the toast message
    jest.advanceTimersByTime(1000);

    // Checking if the toast message is displayed with the correct message
    expect(toast).toHaveBeenCalledWith(' Vous êtes bien connecté !');

    // Restoring the localStorage spy
    localStorageSpy.mockRestore();
  });

  it('should display an error toast when the API call fails', async () => {
    // Mocking a rejected API call
    axios.post.mockRejectedValueOnce(new Error('User not found'));

    // Setting up test data
    const userData = { email: 'test@example.com', password: 'test_password' };
    const navigate = jest.fn();

    try {
      // Calling the Login function
      await Login(userData, navigate);
    } catch (e) {
      // Expectations

      // Checking if the login API was called with the correct data
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/auth/login', {
        email: 'test@example.com',
        password: 'test_password'
      });

      // Checking if the error toast message is displayed
      expect(toast).toHaveBeenCalledWith('Utilisateur non trouvé');
    }
  });
});
