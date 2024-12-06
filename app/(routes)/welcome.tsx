// app/onboarding/welcome.tsx
import { useAuth } from '@/src/context/appContext';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const WelcomeScreen = () => {
  const { setOnboardingComplete } = useAuth();

  const startOnboarding = async () => {
    await setOnboardingComplete(true);
    window.location.href = '/tutorial';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Instagram</Text>
      <Button title="Start Onboarding" onPress={startOnboarding} />
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
});

export default WelcomeScreen;
