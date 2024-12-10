import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Footer from '../components/Footer';
import { getFirestore, collection, addDoc, doc } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { UserContext } from '../UserContext';

const db = getFirestore(app);

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
      // Reference the user's document
      const userDocRef = doc(db, 'usernames', userEmail);

      // Reference the "stacks" subcollection under the user's document
      const stacksCollection = collection(userDocRef, 'stacks');

      // Add a new document to the "stacks" subcollection
      await addDoc(stacksCollection, {
        name: stackName, // Add the stack name here
        createdAt: new Date(), // Optional: Add a timestamp
      });

      Alert.alert('Success', 'Stack saved successfully!');
      setStackName(''); // Clear the input field after saving
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
  saveButton: { backgroundColor: '#001F54', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
