import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({
  name,
  color,
  size,
  type ="Entypo",
}: {
  name: React.ComponentProps<typeof Entypo>["name"] |  React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
  type: "Entypo"  | "FontAwesome", 
}) {
  if(type === "Entypo")return <Entypo  name={name as React.ComponentProps<typeof Entypo>["name"]} size={size} color={color} /> 
  else if(type === "FontAwesome"){
    return <FontAwesome  name={name as React.ComponentProps<typeof FontAwesome>["name"]} size={size} color={color} />
  }
  return null;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color,size }) => <TabBarIcon type="FontAwesome" name="home" color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color,size, }) => <TabBarIcon type="FontAwesome" name="search" color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color,size,}) => <TabBarIcon type="Entypo" name="squared-plus" color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ color,size, }) => <TabBarIcon type="Entypo" name="video" color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color,size, }) => <TabBarIcon type="FontAwesome" name="user-circle" color={color} size={size}  />,
        }}
      />
    </Tabs>
  );
}
