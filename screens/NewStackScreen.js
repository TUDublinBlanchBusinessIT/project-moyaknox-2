import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NewStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
       {/* Main Content Section */}
       <View style={styles.content}>
          <Text style={styles.title}>Create a New Stack</Text>
      {/* Add text here */}
    </View>

    {/* Footer Section */}
      <View style={styles.footer}>
        {/* Home Button */}
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')} // Navigate to Home Screen
        >
          <Icon name="cube" size={24} color="#001F54" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff', // Light background for footer
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  footerButton: {
    marginHorizontal: 20, // Add spacing between footer buttons
  },
});
