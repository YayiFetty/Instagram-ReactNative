// app/auth/register.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';
import { useAuth } from '@/src/context/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    if (username && password) {
      // Store user details (replace this with real registration logic)
      const userData = { username, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));  // Save user to AsyncStorage
      setUser(userData);  // Update context with new user data
      router.push('/login');  // Navigate to the home screen after registration
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput 
        value={username} 
        onChangeText={setUsername} 
        placeholder="Username" 
        style={styles.input} 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
      />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;
