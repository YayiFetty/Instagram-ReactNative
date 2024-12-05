import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import TabBarIcon from "@/src/components/icon/TabBarIcon";
import { BlurView } from "expo-blur";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel:false,
      headerShown:false,
      tabBarActiveTintColor:"red",
      tabBarInactiveTintColor:"blue",
      
      tabBarBackground:() => (
        <BlurView tint="light" intensity={90} style={StyleSheet.absoluteFill}/>
      )
    }}>
      <Tabs.Screen
        name="index"
        options={{
          
          tabBarIcon: ({ color,size, focused }) => <TabBarIcon type="MaterialCommunityIcons" name={focused ? "home":"home-outline"} color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          
          tabBarIcon: ({ color,size, focused }) => <TabBarIcon type="Ionicons" name={focused ? "search" : "search-outline"} color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color,size, focused}) => <TabBarIcon type="Ionicons" name= {focused ? "add-circle-outline" : "add-circle"} color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          
          tabBarIcon: ({ color,size,focused }) => <TabBarIcon type="MaterialCommunityIcons" name={focused ? "movie-play-outline":"movie-play"} color={color} size={size}  />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          
          tabBarIcon: ({ color,size, focused}) => <TabBarIcon type="Ionicons" name={focused ? "person-circle-outline" : "person-circle"} color={color} size={size}  />,
        }}
      />
    </Tabs>
  );
}
