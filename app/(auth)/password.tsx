import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/src/components/button/CustomInput";
import { CustomButton } from "@/src/components/button/CustomButton";
import { Ionicons } from "@expo/vector-icons";

export default function Password() {
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheck = () =>{
    setIsChecked((prev) => !prev)
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal:20, backgroundColor:"grey" }}>
<View className="w-full justify-center items-center mt-10">
<Text className="text-center text-3xl font-bold">Create a Password</Text>
<Text className="text-center">For security, your password must have six characters or more</Text>
</View>
    <View className="flex flex-col gap-5 mt-9">
        
      <CustomInput
        type="password"
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={{
          width: "100%",
          marginBottom: 10,
        }}
      />
      <View className="flex-row items-center">
        <TouchableOpacity onPress={toggleCheck}>
          <Ionicons name ={isChecked ? "checkbox" : "square-outline"}
          size={24}
          color={isChecked ? "#2faef5" : "#aaa"}/>
        </TouchableOpacity>
        <Text>Remeber Password</Text>
      </View>
      <CustomButton
        type="next"
        onPress={() => console.log("click")}
        title="Next"
      />
    </View>
    </SafeAreaView>
  );
}
