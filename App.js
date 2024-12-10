import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen'; // Import HomeScreen
import NewStackScreen from './screens/NewStackScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getFirestore, collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { app } from './firebaseConfig'; // Import Firebase config
import InspirationFeed from './screens/InspirationFeed';

const db = getFirestore(app);
const Stack = createStackNavigator();

export default function App() {
  const handleLogin = async (email, password, navigation) => {
    try {
      const usernamesCollection = collection(db, 'usernames');
      const q = query(usernamesCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          alert('Login Successful!');
          console.log('Navigating to Home with:', { userEmail: email }); // Log userEmail for debugging
          navigation.navigate('Home', { userEmail: email }); // Pass the logged-in user's email
        } else {
          alert('Incorrect password!');
        }
      } else {
        alert('Email not found!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleRegister = async (email, password, navigation) => {
    try {
      const usernamesCollection = collection(db, 'usernames');
      await setDoc(doc(usernamesCollection, email), { email, password });
      alert('Account created successfully!');
      console.log('Navigating to Home with:', { userEmail: email }); // Log userEmail for debugging
      navigation.navigate('Home', { userEmail: email }); // Pass the registered user's email
    } catch (error) {
      console.error('Error registering:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              handleLogin={(email, password, navigation) =>
                handleLogin(email, password, navigation)
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => (
            <SignUpScreen
              {...props}
              handleRegister={(email, password, navigation) =>
                handleRegister(email, password, navigation)
              }
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="NewStack"
          component={NewStackScreen}
          options={{
            headerTitle: 'Create New Stack',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#001F54',
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="InspirationFeed"
          component={InspirationFeed}
          options={{
            headerTitle: 'Inspiration Feed',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#001F54',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
