import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

export default function InspirationFeed({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Inspiration Feed!</Text>
      </View>
      {/* Add Footer for Bottom Navigation */}
      <Footer navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#001F54',
    fontWeight: 'bold',
  },
});

