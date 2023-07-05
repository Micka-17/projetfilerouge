import React, { useState, createContext } from 'react';

// Creating a context for theme
export const ThemeContext = createContext();

// Creating a provider component for theme
export const ThemeProvider = ({ children }) => {
  // Using state to manage the theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Providing the theme and toggleTheme function to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Creating a context for survey
export const SurveyContext = createContext();

// Creating a provider component for survey
export const SurveyProvider = ({ children }) => {
  // Using state to manage the answers
  const [answers, setAnswers] = useState({});

  // Function to save the answers
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  // Providing the answers and saveAnswers function to the children components
  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
