import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList } from 'react-native';
import Footer from '../components/Footer';

const images = [
  { id: '1', name: 'Skiing Adventure', src: require('../assets/skiing.jpg') },
  { id: '2', name: 'Skiing Duo', src: require('../assets/skiingduo.jpg') },
  { id: '3', name: 'Beachy', src: require('../assets/sunholiday_beach.jpg') },
  { id: '4', name: 'Dreaming of Mykonos', src: require('../assets/sunholiday_mykonos.jpg') },
  { id: '5', name: 'Winter Wonderland', src: require('../assets/winter.jpg') },
];

export default function InspirationFeed({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspiration Feed</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search images..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Image List */}
      <FlatList
        data={filteredImages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} resizeMode="contain" />
            <Text style={styles.caption}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.imageList}
      />

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F54',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchBar: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  imageList: {
    paddingBottom: 100, // Space for footer
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});
