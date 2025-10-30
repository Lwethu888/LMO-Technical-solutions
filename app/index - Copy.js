import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
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
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
