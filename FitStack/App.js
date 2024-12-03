import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState([]);

  // Mock `useEffect` to simulate fetching data
  useEffect(() => {
    setLogin([
      { id: '1', username: 'MoyaKnox', password: 'password123' },
      { id: '2', username: 'GraceMoore', password: 'grace456' },
    ]);
  }, []);

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

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
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      marginBottom: 15,
    },
    listItem: {
      padding: 16,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    listItemText: {
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FitStack!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Save Data" onPress={handleLogin} />
      <FlatList
        data={login}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              Username: {item.username}, Password: {item.password}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
