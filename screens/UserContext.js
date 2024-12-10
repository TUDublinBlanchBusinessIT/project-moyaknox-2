import React, { createContext, useState } from 'react';

// Create the User Context
export const UserContext = createContext();

// UserProvider Component
export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

