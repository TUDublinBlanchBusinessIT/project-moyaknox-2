import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(''); // User's name
  const [userEmail, setUserEmail] = useState(''); // User's email
  const [likedStacks, setLikedStacks] = useState([]); // New state for liked stacks

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        likedStacks, // Include likedStacks in the context
        setLikedStacks, // Setter for likedStacks
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


