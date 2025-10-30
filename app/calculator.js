import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

  export default function Calculator() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [course1, setCourse1] = useState(false);
    const [course2, setCourse2] = useState(false);
    const router = useRouter();

    const subtotal = (course1 ? 1200 : 0) + (course2 ? 800 : 0);
    const vat = subtotal * 0.15;
    const totalWithVAT = subtotal + vat;

    const openURL = url => {
      // Implement your URL opening logic here
    };

    return (
      <View>
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
            <Link href="/contact" asChild>
              <Text style={styles.menuItem}>Contact</Text>
            </Link>
          </View>
        )}

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.heading}>Select Courses to Calculate Fees</Text>

          <View style={styles.switchRow}>
            <Text style={styles.courseText}>Computer Literacy (R1200)</Text>
            <Switch
              value={course1}
              onValueChange={setCourse1}
              trackColor={{ false: '#ccc', true: '#007AFF' }}
              thumbColor={course1 ? '#fff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.courseText}>Intro to AI (R800)</Text>
            <Switch
              value={course2}
              onValueChange={setCourse2}
              trackColor={{ false: '#ccc', true: '#007AFF' }}
              thumbColor={course2 ? '#fff' : '#f4f3f4'}
            />
          </View>

          <Text style={styles.totalText}>
            Subtotal: R{subtotal.toFixed(2)}
          </Text>
          <Text style={styles.totalText}>
            VAT (15%): R{vat.toFixed(2)}
          </Text>
          <Text style={[styles.totalText, { fontWeight: '700', marginTop: 10 }]}>
            Total Fees (Incl. VAT): R{totalWithVAT.toFixed(2)}
          </Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
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
      </View>
    );
  }

  // Don't forget to define your styles object!