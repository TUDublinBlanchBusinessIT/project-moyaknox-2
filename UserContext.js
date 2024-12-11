import React, { createContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [likedStacks, setLikedStacks] = useState([]); // Liked stacks specific to the user

  // Fetch user's liked stacks from Firestore when email changes
  useEffect(() => {
    const fetchLikedStacks = async () => {
      if (userEmail) {
        const userDocRef = doc(db, 'usernames', userEmail);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setLikedStacks(userData.likedStacks || []); // Set liked stacks or default to an empty array
        }
      }
    };

    fetchLikedStacks();
  }, [userEmail]);

  // Function to save liked stacks to Firestore
  const saveLikedStacks = async (updatedStacks) => {
    if (userEmail) {
      const userDocRef = doc(db, 'usernames', userEmail);

      try {
        await updateDoc(userDocRef, { likedStacks: updatedStacks });
        setLikedStacks(updatedStacks); // Update context
      } catch (error) {
        console.error('Error updating liked stacks:', error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        likedStacks,
        setLikedStacks,
        saveLikedStacks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
