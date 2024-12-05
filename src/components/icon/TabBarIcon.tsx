import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabBarIcon({
    name,
    color,
    size,
    type ="Ionicons",
  }: {
    name: React.ComponentProps<typeof Ionicons>["name"] |  React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    color: string;
    size: number;
    type: "Ionicons"  | "MaterialCommunityIcons", 
  }) {
    if(type === "Ionicons")return <Ionicons  name={name as React.ComponentProps<typeof Ionicons>["name"]} size={size} color={color} /> 
    else if(type === "MaterialCommunityIcons"){
      return <MaterialCommunityIcons  name={name as React.ComponentProps<typeof MaterialCommunityIcons>["name"]} size={size} color={color} />
    }
    return null;
  }
  