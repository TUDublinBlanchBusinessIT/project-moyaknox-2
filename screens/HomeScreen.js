import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { UserContext } from '../UserContext';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Footer from '../components/Footer'; // Ensure the Footer is correctly imported

export default function HomeScreen({ navigation }) {
  const { userName, userEmail, setUserName, likedStacks } = useContext(UserContext); // Access likedStacks from context

  useEffect(() => {
    const fetchUserName = async () => {
      if (userEmail) {
        const userRef = doc(db, 'usernames', userEmail);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserName(userSnap.data().name); // Update UserContext with fetched name
        }
      }
    };

    if (!userName) {
      fetchUserName(); // Fetch username if not already set
    }
  }, [userName, userEmail]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.welcomeMessage}>Hello, {userName || 'User'}!</Text>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('NewStack')}
          >
            <Text style={styles.createButtonText}>+ Create New Stack</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Liked Stacks</Text>
          {likedStacks.length > 0 ? (
            <FlatList
              data={likedStacks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.likedStackItem}>
                  <Image source={item.src} style={styles.likedStackImage} resizeMode="contain" />
                  <Text style={styles.likedStackName}>{item.name}</Text>
                </View>
              )}
              horizontal // Display liked stacks in a horizontal scrollable list
              contentContainerStyle={styles.likedStacksList}
            />
          ) : (
            <View style={styles.stackPlaceholder}>
              <Text style={styles.stackPlaceholderText}>No liked stacks yet.</Text>
            </View>
          )}
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
  createButton: {
    backgroundColor: '#001F54',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  createButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#001F54', marginBottom: 10 },
  stackPlaceholder: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  stackPlaceholderText: { fontSize: 14, color: '#666', textAlign: 'center' },
  welcomeMessage: { fontSize: 16, color: '#001F54', marginBottom: 20 },
  likedStacksList: {
    paddingVertical: 10,
  },
  likedStackItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  likedStackImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  likedStackName: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});
