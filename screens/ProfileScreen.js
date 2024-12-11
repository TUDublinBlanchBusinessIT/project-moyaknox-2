import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Footer from '../components/Footer';
import { UserContext } from '../UserContext';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase auth

export default function ProfileScreen({ navigation }) {
  const { userName, setUserEmail, setUserName } = useContext(UserContext);
  const auth = getAuth(); // Get the Firebase Auth instance

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Clear the UserContext values
        setUserEmail('');
        setUserName('');
        Alert.alert('Logged Out', 'You have been successfully logged out.');
        navigation.replace('Login'); // Navigate back to the login screen
      })
      .catch((error) => {
        console.error('Error logging out:', error);
        Alert.alert('Error', 'An error occurred while logging out. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>Hello, {userName}!</Text>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#001F54', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#001F54', marginBottom: 20 },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#001F54',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
