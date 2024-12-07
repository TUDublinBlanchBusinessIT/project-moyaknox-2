import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>FitStack</Text>, // Add title
      headerTitleAlign: 'center', // Align the title
      headerStyle: {
        backgroundColor: '#fff', // Background color of the header
      },
      headerTintColor: '#001F54', // Color of the back button
    });
  }, [navigation]);

return (
  <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {/* Content Section */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => {
             // Navigate to the "NewStack" screen
             navigation.navigate('NewStack');
          }}
        >
          <Text style={styles.createButtonText}>+ Create New Stack</Text>
        </TouchableOpacity>

        {/* Liked Stacks Section */}
        <Text style={styles.sectionTitle}>Liked Stacks</Text>
          <View style={styles.stackPlaceholder}>
            <Text style={styles.stackPlaceholderText}>Placeholder for liked stacks</Text>
          </View>

          
        <Text style={styles.sectionTitle}>Trip to Milan</Text>
          <View style={styles.stackPlaceholder}>
            <Text style={styles.stackPlaceholderText}>Placeholder for Milan outfits</Text>
          </View>
        </View>
      </ScrollView>


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

  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  }, 

  content: {
    flex: 4, // Main content area
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headerTitle: {
    fontSize: 18,
    color: '#001F54', // Navy color for text
    fontWeight: 'bold',
  },

  createButton: {
    backgroundColor: '#001F54', // Navy background
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20, // Add space below the button
  },

  createButtonText: {
    color: '#fff', // White text color
    fontSize: 14,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 10,
  },

  stackPlaceholder: {
    width: 400, 
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background for placeholders
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  stackPlaceholderText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
