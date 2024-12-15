


import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type CustomInputs = TextInputProps & {
  type: 'email' | 'password' | 'username';
};

export const CustomInput: React.FC<CustomInputs> = ({ type, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  

  const passwordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }
  return (
    <View
      className={`flex-row w-full  justify-between h-11 px-3 rounded-lg ${
        isFocused ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-gray-100'
      }`}
    >
      {/* TextInput */}
      <TextInput
        className="flex-1 h-full bg-transparent text-sm outline-none"
        textAlignVertical="center" // Centers text vertically in TextInput
        autoCorrect={type !== 'username'}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        autoCapitalize={type === 'email' ? 'none' : type === 'username' ? 'none' : 'sentences'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        onFocus={() => {
          setIsFocused(true);
          
        }}
        onBlur={() => {
          setIsFocused(false);
        
        }}
        {...props}
      />
<View className=' items-center justify-center'>
    
      {/* Icon */}
      {type === 'password' &&  (
        <TouchableOpacity onPress={passwordVisible}>
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )}
</View>
    </View>

    
  );
};
