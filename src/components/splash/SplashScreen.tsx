import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
    colors={[ '#A631BF', '#EE4B60', '#FF7C45', '#FCCB51' ]}
    start={{x:0, y:1}}
    end={{x:0.2, y:-0.3}}
   className='flex-1 '
   style={{width:"100%", height:"100%"}}
  >
    </LinearGradient>
    
  
  );
}

