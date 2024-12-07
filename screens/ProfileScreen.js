import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Main Content Section */}
      <View style={styles.content}>
      <Text style={styles.text}>This is the Profile Screen</Text>
    </View>
  
    {/* Reusable Footer */}
     <Footer navigation={navigation} />
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
  content: {
    flex: 1, // Allow content to take up the available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F54',
},
});
