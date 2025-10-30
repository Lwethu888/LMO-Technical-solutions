import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const courses = [
  {
    id: 'computer-literacy',
    title: 'Computer Literacy',
    // Using the same image URL for now
    image:
      'https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    image:
      'https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png',
  },
  {
    id: 'advanced-coding',
    title: 'Advanced Coding',
    image:
      'https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png',
  },
];

export default function SixMonthCourses() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Six‑Month Courses</Text>
      </View>

      {/* Dropdown Menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild>
            <Text style={styles.menuItem}>Home</Text>
          </Link>
          <Link href="/six-month" asChild>
            <Text style={styles.menuItem}>Six‑Month Courses</Text>
          </Link>
          <Link href="/six-week" asChild>
            <Text style={styles.menuItem}>Six‑Week Courses</Text>
          </Link>
          <Link href="/contact" asChild>
            <Text style={styles.menuItem}>Contact</Text>
          </Link>
        </View>
      )}

      {/* Main Content */}
      <Text style={styles.heading}>Select a Course</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseButton}
            onPress={() => router.push(`/six-month/${item.id}`)}
            activeOpacity={0.7}
          >
            <View style={styles.courseContent}>
              <Image
                source={{ uri: item.image }}
                style={styles.courseImage}
                resizeMode="cover"
              />
              <Text style={styles.courseButtonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/')}
        activeOpacity={0.7}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Follow us:</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => openURL('https://www.facebook.com')}>
            <Text style={styles.socialLink}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://www.twitter.com')}>
            <Text style={styles.socialLink}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://www.instagram.com')}>
            <Text style={styles.socialLink}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  menuDropdown: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#007AFF',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 25,
    color: '#222',
    textAlign: 'center',
    marginTop: 20,
  },
  courseButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  courseContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  courseButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  homeButton: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#34C759',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 20,
  },
  socialLink: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
