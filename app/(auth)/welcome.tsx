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
<Text className="text-center text-3xl font-bold">Welcome to Instagram,</Text>
<Text className="text-center text-3xl font-bold">Jikamshi Dende</Text>
<Text className="text-center">Find people to follow and stat sharing photos and videos,
  You can update your info any time in the setting and new info taps
</Text>
</View>
    <View className="flex flex-col gap-5 mt-9">
        
    <CustomButton
    title="Complete Your Signup"
    onPress={() => {}}/>
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
