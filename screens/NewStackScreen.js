import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer'; 

export default function NewStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
       {/* Main Content Section */}
       <View style={styles.content}>
          <Text style={styles.title}>Create a New Stack</Text>
      {/* Add text here */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F54',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,  
  },
});
