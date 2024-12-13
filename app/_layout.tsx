import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import useCustomFonts from "@/src/hooks/useCustomFonts";
import "../global.css";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  const { fontsLoaded, error } = useCustomFonts();

  // show a loading vieww if fonts are not yet loaded
  if (!fontsLoaded) {
    if (error) {
      return (
        <View className="w-full h-full flex-1 justify-center items-center">
          <Text>Error loading fonts: {error.message}</Text>
        </View>
      );
    }
    return (
      <View className=" w-full h-full flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
       <SubLayout/>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


 function SubLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="(routes)" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" />
    <Stack.Screen name="(tabs)" />
  </Stack>
  )
}