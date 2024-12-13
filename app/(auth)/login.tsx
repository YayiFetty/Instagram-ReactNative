
import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LanguageSelector from "@/src/components/language/LangSelector";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { CustomButton } from "@/src/components/button/CustomButton";
import { CustomInput } from "@/src/components/button/CustomInput";
import { router } from "expo-router";

export default function Login() {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, width: "100%", height: "100%" }}
        colors={["#010332", "#100327"]}
      >
        {/* Language Selector at the TOP */}
        <View className="absolute top-0 w-full z-10">
          <LanguageSelector />
        </View>

        {/* Main Login Content in the MIDDLE */}
        <View className="flex-1 gap-6 justify-center items-center px-4">
          <View>
            <Text
              style={{
                fontFamily: "Insta",
                fontSize: width * 0.08,
                color: "#fff",
                marginBottom: 20,
              }}
              className="text-center"
            >
              Instagram
            </Text>
          </View>

          <View className="w-full flex-col  items-center gap-5">
            <CustomInput
              type="email"
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              style={{
                width: "100%",
                marginBottom: 10,
              }}
            />
            <CustomInput
              type="password"
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              style={{
                width: "100%",
                marginBottom: 10,
              }}
            />

            <View className="w-full">
              <CustomButton
                title="Login"
                type="login"
                onPress={() => {
                  // Add your login logic here
                  console.log("Login pressed");
                }}
              />
            </View>
          </View>

          <Pressable className="mt-2">
            <Text className="text-[#2FAEF5] text-center">
              Log in with Facebook
            </Text>
          </Pressable>

          <View className="flex-row items-center justify-center w-full my-5 px-5">
            <View
              className="flex-1"
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: "#fff",
              }}
            />
            <Text className="text-white font-bold mx-2">OR</Text>
            <View
              className="flex-1"
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: "#fff",
              }}
            />
          </View>

          <Pressable className="mt-4 items-center">
            <Text className="text-white text-center">
              Forgotten your login details?{" "}
              <Text className="text-[#2FAEF5]">Get help with logging in</Text>
            </Text>
          </Pressable>
        </View>

        {/* "Don't have an account" section at the BOTTOM */}
        <View className="absolute bottom-0 w-full">
          <View
            className="w-[90%] self-center items-center justify-center py-4 border-t"
            style={{
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: "#fff",
            }}
          >
            <Text className="text-white text-center">
              Don't have an account?{" "}
              <TouchableOpacity onPress={() => router.push("/(auth)/username")} >
              <Text className="font-bold text-white">Sign up</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}







