
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

export default function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadRes() {
      try {
        // Prevent auto hide of splash screen
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font, // Load FontAwesome icons
          PlusJakartaSansbold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
          Insta: require("../../assets/fonts/Instagram.ttf")
        });
        setFontsLoaded(true);

      } catch (error) {
        console.warn('Error loading fonts:', error);
      } 
    }

    loadRes();
  }, []);

  // hide splashscreen when fonts are loaded
  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  return fontsLoaded;
}
