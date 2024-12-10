import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { UserContext } from '../UserContext'; // Import UserContext
import Footer from '../components/Footer'; // Import the Footer component



const db = getFirestore(app);

export default function LoginScreen({ navigation }) {
  const { setUserEmail, setUserName } = useContext(UserContext); // Use UserContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Error', 'Please fill out all fields.');
        return;
      }

      // Query Firestore for the user with the provided email
      const usernamesCollection = collection(db, 'usernames');
      const q = query(usernamesCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          // Set global user data
          setUserEmail(email);
          setUserName(userData.name || 'User');

          // Redirect to HomeScreen
          Alert.alert('Success', 'Login successful!');
          navigation.navigate('Home'); // Navigate to HomeScreen directly
        } else {
          Alert.alert('Error', 'Incorrect password.');
        }
      } else {
        Alert.alert('Error', 'Email not found.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin} // Use handleLogin instead of direct navigation
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          console.log('Navigating to Register screen');
          navigation.navigate('Register'); // Navigate to Register screen
        }}
      >
        <Text style={styles.linkText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#001f3f', padding: 20 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 30 },
  input: { width: '80%', height: 50, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10, fontSize: 16, marginBottom: 20 },
  button: { width: '80%', height: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginBottom: 15 },
  buttonText: { color: '#001f3f', fontSize: 16, fontWeight: 'bold' },
  link: { marginTop: 10 },
  linkText: { color: '#fff', textDecorationLine: 'underline' },
});