import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';

export default function HomeScreen({ navigation, route }) {
  const [username, setUsername] = useState(null); // Define username state

  // Safely extract userEmail from route.params
  const userEmail = route?.params?.userEmail || 'No email provided';
  console.log('Received userEmail in HomeScreen:', userEmail);

  useEffect(() => {
      const fetchUsername = async () => {
        try {
          if (!userEmail || userEmail === 'No email provided') {
            console.warn('userEmail is not provided in route.params.');
            return;
          }
      
          const db = getFirestore(app);
          const q = query(collection(db, 'usernames'), where('email', '==', userEmail));
          const querySnapshot = await getDocs(q);
      
          console.log('Query snapshot size:', querySnapshot.size); // Log the size of the snapshot
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
      
            // **DEBUG LOG HERE**
            console.log('Fetched userData from Firebase:', userData); // Log the data fetched from Firebase
      
            // Use email as a fallback if username is not available
            setUsername(userData.username || userData.email);
          } else {
            console.warn('No user found with the provided email.');
          }
        } catch (error) {
          console.error('Error fetching username:', error);
        }
      };
      

    fetchUsername();
  }, [userEmail]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>FitStack</Text>,
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#fff' },
      headerTintColor: '#001F54',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {/* Welcome Message */}
          {username ? (
            <Text style={styles.welcomeMessage}>Welcome, {username}!</Text>
          ) : (
            <Text style={styles.welcomeMessage}>Loading your details...</Text>
          )}

          {/* Create New Stack Button */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('NewStack')}
          >
            <Text style={styles.createButtonText}>+ Create New Stack</Text>
          </TouchableOpacity>

          {/* Liked Stacks Section */}
          <Text style={styles.sectionTitle}>Liked Stacks</Text>
          <View style={styles.stackPlaceholder}>
            <Text style={styles.stackPlaceholderText}>Placeholder for liked stacks</Text>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 4, alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 20 },
  headerTitle: { fontSize: 18, color: '#001F54', fontWeight: 'bold' },
  createButton: { backgroundColor: '#001F54', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, marginBottom: 20 },
  createButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#001F54', marginBottom: 10 },
  stackPlaceholder: { width: 400, height: 160, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  stackPlaceholderText: { fontSize: 14, color: '#666', textAlign: 'center' },
  welcomeMessage: { fontSize: 16, color: '#001F54', marginBottom: 20 },
});
