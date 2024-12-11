import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Footer from '../components/Footer';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Ensure your Firebase config is correctly imported
import { UserContext } from '../UserContext';

export default function NewStackScreen({ navigation }) {
  const [stackName, setStackName] = useState('');
  const { userEmail } = useContext(UserContext); // Get logged-in user's email from context

  const saveStack = async () => {
    if (!stackName.trim()) {
      Alert.alert('Error', 'Stack name cannot be empty.');
      return;
    }

    if (!userEmail) {
      Alert.alert('Error', 'User email is not set. Please log in again.');
      return;
    }

    try {
      // Reference the user's document in Firebase
      const userDocRef = doc(db, 'usernames', userEmail);

      // Retrieve the existing document to ensure it exists
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        // Update the stacks field by appending the new stack name
        await updateDoc(userDocRef, {
          stacks: arrayUnion(stackName), // Use arrayUnion to avoid duplicates
        });

        // Clear the input field and show success message
        setStackName('');
        Alert.alert('Success', `Stack "${stackName}" saved successfully!`, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'), // Navigate back to HomeScreen
          },
        ]);
      } else {
        Alert.alert('Error', 'User document does not exist in Firebase.');
      }
    } catch (error) {
      console.error('Error saving stack:', error);
      Alert.alert('Error', 'Failed to save stack. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create a New Stack</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter stack name"
          placeholderTextColor="#999"
          value={stackName}
          onChangeText={setStackName}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveStack}>
          <Text style={styles.saveButtonText}>Save Stack</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#001F54', marginBottom: 20 },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#001F54',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
