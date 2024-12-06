import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import "../global.css";
import SplashScreen from '@/src/components/splash/SplashScreen';

export default function Index() {
  const [redirect, setRedirect] = React.useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    },4000);
    return () => clearTimeout(timeout)
  },[]);

  if(redirect){
    return   <Redirect href="/(routes)/onboard"/>
  }
  return (
    <View className='flex-1'>
    <SplashScreen/>
    </View>
  )
}