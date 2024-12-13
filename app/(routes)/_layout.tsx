import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function onBoardLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="onboard/index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
