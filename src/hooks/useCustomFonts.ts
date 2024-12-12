import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';

// Define the return type explicitly
type UseCustomFontsReturn = {
  fontsLoaded: boolean;
  error: Error | null;
};

SplashScreen.preventAutoHideAsync();

export default function useCustomFonts(): UseCustomFontsReturn {
  const [fontsLoaded, error] = useFonts({
    Insta: require('../../assets/fonts/Instagram.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // Ensure the hook always returns a defined object
  return { fontsLoaded: !!fontsLoaded, error };
}
