import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer if it exists

export default function InspirationFeed({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Inspiration Feed</Text>

        {/* Add the skiing image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/skiing.jpg')} // Reference to your skiing image
            style={styles.image}
            resizeMode="contain" // Ensure the whole image is visible
          />
          <Text style={styles.caption}>Skiing Adventure</Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '90%', // Allow the image to take up 90% of the screen width
    height: 200,  // Adjust the height as needed
    resizeMode: 'contain', // Make the entire image visible
  },
  caption: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
