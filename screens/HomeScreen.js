import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import { UserContext } from '../UserContext';

export default function HomeScreen({ navigation }) {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.welcomeMessage}>Hello, {userName}!</Text>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('NewStack')}>
            <Text style={styles.createButtonText}>+ Create New Stack</Text>
          </TouchableOpacity>
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
})




