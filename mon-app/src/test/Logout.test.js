import { toast } from 'react-toastify';
import Logout from '../components/Log/Logout';

// Mocking the react-toastify dependency to test if the toast function is called with the expected arguments
jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

// Using fake timers for setTimeout
jest.useFakeTimers();

describe('Logout', () => {
  it('should remove token from localStorage, navigate to home page, and show success message', () => {
    // Mocking the navigate function
    const navigateMock = jest.fn();

    // Setting up the initial token in localStorage
    localStorage.setItem('token', 'test-token');
    
    // Calling the Logout function
    Logout(navigateMock);

    // Expectations

    // Checking that the toast function is not called before advancing the timers
    expect(toast).not.toHaveBeenCalled();

    // Advancing the timers to trigger the toast message
    jest.advanceTimersByTime(1000);

    // Checking that the token is removed from localStorage
    expect(localStorage.getItem('token')).toBeNull();

    // Checking that the navigate function is called with the correct path
    expect(navigateMock).toHaveBeenCalledWith('/accueil');

    // Checking that the toast function is called with the correct message
    expect(toast).toHaveBeenCalledWith(' Vous êtes bien déconnecté !');
  });
});
