import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FitStack!</Text>
      <Button
        title="Log Out"
        onPress={() => {
          // Add logout functionality here if needed
          navigation.navigate('Login'); // Navigate back to login screen
        }}
        color="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background to white
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#001F54', // Navy color for text
    fontWeight: 'bold',
    marginBottom: 20, // Add spacing between text and button
  },
});
