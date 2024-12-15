import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/src/components/button/CustomInput";
import { CustomButton } from "@/src/components/button/CustomButton";
import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";

export default function Username() {
    
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal:20, backgroundColor:"grey" }}>
<View className="w-full justify-center items-center mt-10">
<Text className="text-center text-3xl font-bold">Choose Username</Text>
<Text className="text-center">You can always change it later</Text>
</View>
    <View className="flex flex-col gap-5 mt-9">
        
      <CustomInput
        type="username"
        placeholder="Enter your Username"
        placeholderTextColor="#aaa"
        style={{
          width: "100%",
          marginBottom: 10,
        }}
      />

      <CustomButton
        type="next"
        onPress={() => router.push("/password")}
        title="Next"
      />
    </View>
    </SafeAreaView>
  );
}
