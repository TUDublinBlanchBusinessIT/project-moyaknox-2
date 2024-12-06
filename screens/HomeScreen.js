import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

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

        <Text style={styles.contentText}>Welcome to the FitStack app!</Text>
      </View>

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
  contentText: {
    fontSize: 16,
    color: '#001F54', // Navy color for text
    marginTop: 20,
  },
});
