import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      {/* Empty space for alignment */}
      <View style={{ flex: 1 }}></View>

      {/* Home Button */}
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="cube" size={24} color="#001F54" />
        </TouchableOpacity>
      </View>

      {/* Profile Button */}
      <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="user" size={24} color="#001F54" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9', // Light background for footer
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButtonContainer: {
    flex: 1, // Center the cube button
    alignItems: 'center',
  },
  footerButton: {
    marginHorizontal: 20,
  },
});
