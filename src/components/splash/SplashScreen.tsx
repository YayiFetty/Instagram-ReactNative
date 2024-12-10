import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
    colors={[ '#A631BF', '#EE4B60', '#FF7C45', '#FCCB51' ]}
    start={{x:0, y:0.2}}
    end={{x:0, y:0.3}}
   className='flex-1 justify-center items-center'
  />
    
  
  );
}

