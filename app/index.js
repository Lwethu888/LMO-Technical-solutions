import { Ionicons } from '@expo/vector-icons'; // For menu icon
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header with Menu Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Empowering the Nation</Text>
      </View>

      {/* Dropdown Menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild>
            <Text style={styles.menuItem}>Home</Text>
          </Link>
          <Link href="/six-month" asChild>
            <Text style={styles.menuItem}>Six-Month Courses</Text>
          </Link>
          <Link href="/six-week" asChild>
            <Text style={styles.menuItem}>Six-Week Courses</Text>
          </Link>
          <Link href="/calculator" asChild>
            <Text style={styles.menuItem}>Calculate Fees</Text>
          </Link>
          <Link href="/contact" asChild>
            <Text style={styles.menuItem}>Contact</Text>
          </Link>
        </View>
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Empowering the Nation</Text>
        <Text style={styles.description}>
          Empowering the Nation is a platform offering impactful educational courses to uplift communities.
        </Text>

        <View style={styles.buttonGroup}>
          <Link href="/six-month" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Six-Month Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/six-week" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Six-Week Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/calculator" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Calculate Fees</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>

      {/* Footer with social media links */}
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
    backgroundColor: '#f5f5f5',
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
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
