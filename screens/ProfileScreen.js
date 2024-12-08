import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';


export default function ProfileScreen({ navigation }) {
       
    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your Profile</Text>      
    </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F54',
  },
  email: {
    fontSize: 16,
    color: '#001F54',
    marginTop: 10,
  },
});
