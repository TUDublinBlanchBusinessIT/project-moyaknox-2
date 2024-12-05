import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewStackScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the New Stack Screen!</Text>
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
});
