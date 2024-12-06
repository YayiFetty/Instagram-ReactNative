import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import useCustomFonts from '@/src/hooks/useCustomFonts'
import "../global.css";
export default function RootLayout() {
  const  fontsLoaded = useCustomFonts();
  
    // show a loading vieww if fonts are not yet loaded
    if(fontsLoaded){
      return (
        <View className=' w-full h-full flex-1 justify-center items-center'>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
  return (
      <Stack screenOptions={{
        
      }}>
        <Stack.Screen name="index" options={{headerShown:false,}}/>
        <Stack.Screen name="(routes)/onboard"/>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
      </Stack>
  )
}