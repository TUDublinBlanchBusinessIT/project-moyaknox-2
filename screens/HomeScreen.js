import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
        <Text>Welcome to the FitStack app!</Text>
        {/* You can add additional content here */}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  content: {
    flex: 4, // Main content area
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.5, // Footer for the "Log Out" button
    justifyContent: 'flex-end', // Align button at the bottom
    alignItems: 'center', // Center button horizontally
    paddingBottom: 20, // Add spacing at the bottom
  },
  
  headerTitle: {
    fontSize: 18,
    color: '#001F54', // Navy color for text
    fontWeight: 'bold',
  },
});
