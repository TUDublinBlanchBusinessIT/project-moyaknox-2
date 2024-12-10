import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContext'; // Import the UserProvider for global state
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import NewStackScreen from './screens/NewStackScreen';
import ProfileScreen from './screens/ProfileScreen';
import InspirationFeed from './screens/InspirationFeed';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#001F54',
            headerTitleAlign: 'center',
          }}
        >
          {/* Login and Registration Screens */}
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={SignUpScreen} options={{ headerShown: false }} />

          {/* Main Application Screens */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewStack" component={NewStackScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="InspirationFeed" component={InspirationFeed} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}


