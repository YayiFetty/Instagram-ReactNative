import { Slot, Stack } from 'expo-router';

export default function RootLayoutNav() {
  return (
    <Slot>
      <Stack initialRouteName="(onboarding)">
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Slot>
  );
}