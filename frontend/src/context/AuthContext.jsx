import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext(null);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  // Initialize isAuthenticated state based on localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token'); // '!!' converts a truthy/falsy value to true/false
  });

  // You might also want to store user data
  const [user, setUser] = useState(() => {
    const userEmail = localStorage.getItem('userEmail'); // Assuming you store email or other user data
    return userEmail ? { email: userEmail } : null;
  });

  // Function to handle login
  const login = (token, userEmail) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userEmail', userEmail);
    setIsAuthenticated(true);
    setUser({ email: userEmail });
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setUser(null);
  };


  useEffect(() => {
    const handleStorageChange = () => {
      const currentToken = localStorage.getItem('token');
      setIsAuthenticated(!!currentToken);
      const currentUserEmail = localStorage.getItem('userEmail');
      setUser(currentUserEmail ? { email: currentUserEmail } : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);


  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier consumption
export const useAuth = () => {
  return useContext(AuthContext);
};