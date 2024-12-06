import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
            // Handle the "Create New Stack" button click
            alert('Create New Stack clicked!');
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


      {/* Footer Section */}
      <View style={styles.footer}>
        <Button
          title="Log Out"
          onPress={() => navigation.navigate('Login')}
          color="#001F54"
        />
      </View>
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

  footer: {
    justifyContent: 'flex-end', // Align button at the bottom
    alignItems: 'center', // Center button horizontally
    padding: 20, // Add spacing at the bottom
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
    backgroundColor: '#f0f0f0', // Light gray background for placeholders
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  stackPlaceholderText: {
    fontSize: 14,
    color: '#666',
  },
});
