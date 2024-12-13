

// import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';

// type CustomInputs = TextInputProps & {
//     type: 'email' | 'password';
// };

// export const CustomInput: React.FC<CustomInputs> = ({ type, ...props }) => {
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     const [isFocused, setIsFocused] = useState(false); // Tracks focus state
//     const [isPasswordActive, setIsPasswordActive] = useState(false); // Tracks if password field is active

//     return (
//         <View
//             className={`flex-1 flex-row items-center px-4 py-4 border-2 rounded-md my-3 ${
//                 isFocused ? ' border-x-sky-950' : 'border-[#ccc]'
//             } bg-[#f9f9f9]`}
//         >
//             <TextInput
//                 className="flex-1 px-2 text-sm h-fit"
//                 style={{ outline: 'none' }}
//                 autoCorrect
//                 secureTextEntry={type === 'password' && !isPasswordVisible}
//                 autoCapitalize={type === 'email' ? 'none' : 'sentences'}
//                 keyboardType={type === 'email' ? 'email-address' : 'default'}
//                 onFocus={() => {
//                     setIsFocused(true);
//                     if (type === 'password') setIsPasswordActive(true);
//                 }}
//                 onBlur={() => {
//                     setIsFocused(false);
//                     if (type === 'password') setIsPasswordActive(false);
//                 }}
//                 {...props}
//             />
//             {type === 'password' && isPasswordActive && (
//                 <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
//                     <Ionicons
//                         name={isPasswordVisible ? 'eye' : 'eye-off'}
//                         size={20}
//                         color="black"
//                     />
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// };




import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type CustomInputs = TextInputProps & {
    type: 'email' | 'password';
};

export const CustomInput: React.FC<CustomInputs> = ({ type, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // Tracks focus state
    const [isPasswordActive, setIsPasswordActive] = useState(false); // Tracks if password field is active

    return (
        <View
            className={`flex-row items-center px-4 py-2 rounded-md ${
                isFocused ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-gray-100'
            } `}
        >
            <TextInput
                className="flex-1 px-2 text-sm"
                style={{ outlineWidth: 0 }} // Disable native outline
                autoCorrect
                secureTextEntry={type === 'password' && !isPasswordVisible}
                autoCapitalize={type === 'email' ? 'none' : 'sentences'}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
                onFocus={() => {
                    setIsFocused(true);
                    if (type === 'password') setIsPasswordActive(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                    if (type === 'password') setIsPasswordActive(false);
                }}
                {...props}
            />
            {type === 'password' && isPasswordActive && (
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};
