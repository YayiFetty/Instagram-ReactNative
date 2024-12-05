import React, { useContext, useEffect, useState } from "react";
import { ContextValue } from "../types/types";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = React.createContext<any>(null);


// Define constants for routing groups
const AUTH_GROUP = "(auth)";
const TABS_GROUP = "(tabs)";

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const rootSegment = useSegments();
  const router = useRouter();
  console.log("segment", rootSegment);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = rootSegment[0] === AUTH_GROUP;
    const inTabsGroup = rootSegment[0] === TABS_GROUP;

    if (!isOnboarded){
        router.replace("/(onboarding)/welcome")
    }
   else if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");

    } else if (user && inAuthGroup) {
      router.replace("/(tabs)/home");
    }
  }, [user, rootSegment, isLoading]);
  // firstly check if the user exist
  const checkAuthStatus = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      const onboardedStatus = await AsyncStorage.getItem("onboarded")
      if (onboardedStatus === "true"){
        setIsOnboarded(true)
      }
      else{
        setIsOnboarded(false);
      }
      
    } catch (err) {
      console.error("error checking status:", err);
    }
    finally{
        setIsLoading(false);
    }
  };

  const contextValue: ContextValue = {
    user,
    setUser,
    isLoading,
    isOnboarded,
    setIsOnboarded
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used ");
  }
  return context;
};
