import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
=======
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [username, setUsername] = useState(''); // State for Username
  const [password, setPassword] = useState(''); // State for Password
>>>>>>> 64cea71281cb4daa6a4a2ac6938d004dc3ef3516

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FitStack!</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#999"
<<<<<<< HEAD
        secureTextEntry
=======
        secureTextEntry // Makes input text hidden
>>>>>>> 64cea71281cb4daa6a4a2ac6938d004dc3ef3516
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
<<<<<<< HEAD
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Another Button (e.g., Register) */}
      <TouchableOpacity style={[styles.button, styles.spacing]} onPress={() => alert('Register clicked!')}>
        <Text style={styles.buttonText}>Register here</Text>
      </TouchableOpacity>
=======
      <Button title="Login" onPress={handleLogin} />
>>>>>>> 64cea71281cb4daa6a4a2ac6938d004dc3ef3516
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
<<<<<<< HEAD
    marginBottom: 30,
=======
    marginBottom: 20,
>>>>>>> 64cea71281cb4daa6a4a2ac6938d004dc3ef3516
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
<<<<<<< HEAD
    marginBottom: 30,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff', // White background
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#001f3f', // Navy text
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacing: {
    marginTop: 12, // Add space between buttons
=======
    marginBottom: 15,
>>>>>>> 64cea71281cb4daa6a4a2ac6938d004dc3ef3516
  },
});
