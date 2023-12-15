// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


{/*AuthContext.js: This file creates a React context for 
authentication. It provides a way to pass the authentication 
state and the login and logout functions down the component tree 
without having to pass props down manually at every level. Any 
component that needs to know about the authentication state or 
needs to call login or logout can use this context.*/}