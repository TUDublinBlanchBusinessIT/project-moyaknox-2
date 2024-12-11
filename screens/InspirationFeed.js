import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons

const images = [
  { id: '1', name: 'Skiing Adventure', src: require('../assets/skiing.jpg') },
  { id: '2', name: 'Skiing Duo', src: require('../assets/skiingduo.jpg') },
  { id: '3', name: 'Sun holiday', src: require('../assets/sunholiday_beach.jpg') },
  { id: '4', name: 'Sun holiday', src: require('../assets/sunholiday_mykonos.jpg') },
  { id: '5', name: 'Winter Wonderland', src: require('../assets/winter.jpg') },
];

export default function InspirationFeed({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { likedStacks, setLikedStacks } = useContext(UserContext); // Access liked stacks from context

  const toggleLike = (image) => {
    if (likedStacks.some((likedImage) => likedImage.id === image.id)) {
      // Remove from liked stacks
      setLikedStacks(likedStacks.filter((likedImage) => likedImage.id !== image.id));
    } else {
      // Add to liked stacks
      setLikedStacks([...likedStacks, image]);
    }
  };

  // Filter images based on the search term
  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
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
        {searchTerm.trim() && filteredImages.length > 0 ? (
          <FlatList
            data={filteredImages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={item.src} style={styles.image} resizeMode="contain" />
                <Text style={styles.caption}>{item.name}</Text>
                <TouchableOpacity onPress={() => toggleLike(item)}>
                  <Icon
                    name="heart"
                    size={24}
                    color={likedStacks.some((likedImage) => likedImage.id === item.id) ? 'red' : '#001F54'} // Red for liked, navy for not liked
                  />
                </TouchableOpacity>
              </View>
            )}
            numColumns={2} // Display images in two columns
            contentContainerStyle={styles.imageList}
          />
        ) : searchTerm.trim() && filteredImages.length === 0 ? (
          <Text style={styles.noResults}>No images match your search.</Text>
        ) : null}
      </View>

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
  contentContainer: {
    flex: 1,
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
    marginBottom: 10,
  },
  imageList: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
