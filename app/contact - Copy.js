import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { WebView } from 'react-native-webview';

const courses = [
  { id: 'computer-literacy', title: 'Computer Literacy', fee: 1200 },
  { id: 'entrepreneurship', title: 'Entrepreneurship', fee: 1500 },
  { id: 'advanced-coding', title: 'Advanced Coding', fee: 2000 },
  { id: 'basic-excel', title: 'Basic Excel', fee: 800 },
  { id: 'intro-to-ai', title: 'Introduction to AI', fee: 1000 },
];

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle course selection
  const toggleCourse = (id) => {
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((courseId) => courseId !== id) : [...prev, id]
    );
  };

  // Calculate total fee with VAT and discount (10% discount if >2 courses)
  const calculateTotal = () => {
    let total = selectedCourses.reduce((sum, id) => {
      const course = courses.find((c) => c.id === id);
      return sum + (course ? course.fee : 0);
    }, 0);

    if (selectedCourses.length > 2) {
      total *= 0.9; // 10% discount
    }

    const vat = total * 0.15;
    const totalWithVAT = total + vat;

    return { total, vat, totalWithVAT };
  };

  const onSubmit = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      Alert.alert('Please fill in all your contact details.');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('Please select at least one course.');
      return;
    }

    const { total, vat, totalWithVAT } = calculateTotal();

    Alert.alert(
      'Invoice Summary',
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n` +
        `Selected Courses:\n${selectedCourses
          .map((id) => {
            const c = courses.find((course) => course.id === id);
            return `- ${c.title} (R${c.fee})`;
          })
          .join('\n')}\n\n` +
        `Subtotal: R${total.toFixed(2)}\nDiscount: ${
          selectedCourses.length > 2 ? '10%' : '0%'
        }\nVAT (15%): R${vat.toFixed(2)}\n\n` +
        `Total Fee: R${totalWithVAT.toFixed(2)}\n\nA consultant will contact you shortly!`
    );
  };

  const openURL = (url) => Linking.openURL(url);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with menu */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      {/* Dropdown menu */}
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
            <Text style={styles.menuItem}>Fee Calculator</Text>
          </Link>
        </View>
      )}

      {/* Contact info */}
      <View style={{ marginTop: menuOpen ? 10 : 20 }}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>info@empoweringnation.org</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>+27 123 456 789</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoText}>123 Empowerment Ave, Johannesburg</Text>
        </View>

        {/* Form */}
        <Text style={styles.formHeading}>Your Contact Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.formHeading}>Select Courses</Text>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.checkboxContainer}
            onPress={() => toggleCourse(course.id)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.checkbox,
                selectedCourses.includes(course.id) && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>
              {course.title} (R{course.fee})
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Request Consultant Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>

      {/* Google Map Embed */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapHeading}>Our Location</Text>
        <WebView
          originWhitelist={['*']}
          source={{
            uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2203622145813!2d28.04281051500994!3d-26.204102883438836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b6b0b24f39f%3A0x823c789ec76e81a6!2s123%20Empowerment%20Ave%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1696348800000!5m2!1sen!2sza',
          }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scrollEnabled={false}
        />
      </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f9f9f9',
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  menuButton: {
    paddingRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  menuDropdown: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontWeight: '600',
    fontSize: 18,
    width: 80,
    color: '#444',
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    flexShrink: 1,
  },
  formHeading: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 12,
  },
  checkboxSelected: {
    backgroundColor: '#007AFF',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#444',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    elevation: 2,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#34C759',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    marginTop: 40,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 20,
  },
  socialLink: {
    fontSize: 16,
    color: '#007AFF',
    marginHorizontal: 10,
  },
  mapContainer: {
    height: 250,
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
});
