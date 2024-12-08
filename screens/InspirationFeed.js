import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InspirationFeed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Inspiration Feed!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#001F54',
    fontWeight: 'bold',
  },
});
