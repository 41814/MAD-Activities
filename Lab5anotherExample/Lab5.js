import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Basic validation
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.welcomeText}>Welcome, {username}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.headerText}>Login Form</Text>

          {/* Username Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Login Button */}
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
