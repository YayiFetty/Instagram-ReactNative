// app/auth/login.tsx
import { useAuth } from '@/src/context/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const { setUser } = useAuth();

  const handleLogin = async () => {
    const userData = { username }; // Example user data; replace with real login logic
    await AsyncStorage.setItem('user', JSON.stringify(userData));  // Store user in AsyncStorage
    setUser(userData);  // Update context with logged-in user
    window.location.href = '/tabs/home';  // Redirect to home after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        value={username} 
        onChangeText={setUsername} 
        placeholder="Username" 
        style={styles.input} 
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default LoginScreen;
