import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import { UserContext } from '../UserContext';

export default function ProfileScreen({ navigation }) {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>Hello, {userName || 'User'}!</Text>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#001F54', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#001F54' },
});
