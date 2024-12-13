import { View, Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    title: string;
    onPress: () => void;
    type?: "submit" | "login" | "delete";
    disabled?: boolean;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export const CustomButton: React.FC<ButtonProps> = ({ 
    title, 
    onPress, 
    type = "login", 
    disabled = false, 
    buttonStyle, 
    textStyle 
}) => {
    const getButtonStyles = () => {
        switch(type){
            case "login":
                return {backgroundColor:"#2FAEF5", icon:"login"};
            case "delete":
                return {backgroundColor:"#f44336", icon:"trash"};
            default:
                return {backgroundColor:"#212236", icon:"check"};
        }
    }

    const {backgroundColor, icon} = getButtonStyles();

    return (
       <View className='w-full'>
         <TouchableOpacity
            className={twMerge(
                "flex-row w-full items-center justify-center px-4 py-3 rounded-md",
                disabled ? "bg-gray-400" : "",
                type === "login" ? "bg-blue-500" : "",
                type === "delete" ? "bg-red-500" : "",
                type === "submit" ? "bg-blue-900" : ""
            )}
            style={[
                { backgroundColor: disabled ? "#ccc" : backgroundColor },
                buttonStyle
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            {icon && (
                <Entypo 
                    name={icon} 
                    size={20} 
                    color="#fff" 
                    style={{ marginRight: 8 }}
                />
            )}
            <Text 
                style={[
                    { color: 'white', textAlign: 'center', fontWeight: 'bold' },
                    textStyle
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
       </View>
    )
}