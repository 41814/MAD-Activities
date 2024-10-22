import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DrDashboard = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's find your doctor</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search conditions, doctors..."
      />
      <View style={styles.row}>
        <View style={styles.doctorCard}>
          <FontAwesome name="user-md" size={80} color="#e8daef" style={styles.icon} />
          <View style={styles.info}>
            <Text style={styles.name}>Dr. John Smith</Text>
            <Text style={styles.specialty}>General Doctor</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Rating: 4.9</Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.doctorCard}>
          <FontAwesome name="user-md" size={80} color="#e8daef" style={styles.icon} />
          <View style={styles.info}>
            <Text style={styles.name}>Dr. Anna Dinn</Text>
            <Text style={styles.specialty}>Surgeon</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Rating: 4.9</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.doctorCard}>
          <FontAwesome name="stethoscope" size={80} color="#e8daef" style={styles.icon} />
          <View style={styles.info}>
            <Text style={styles.name}>Dr. Angela Rayez</Text>
            <Text style={styles.specialty}>Therapist </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Rating: 4.8</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.doctorCard}>
          <FontAwesome name="medkit" size={80} color="#e8daef" style={styles.icon} />
          <View style={styles.info}>
            <Text style={styles.name}>Dr. Chris Bronte</Text>
            <Text style={styles.specialty}>Dentist and</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Rating: 5.0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8daef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#7d3c98',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  doctorCard: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderColor: '#e8daef',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#a569bd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  specialty: {
    fontSize: 16,
    color: '#e8daef',
    textAlign: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#e8daef',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7d3c98',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DrDashboard;
