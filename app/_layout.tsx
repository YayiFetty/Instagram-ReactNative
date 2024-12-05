import FontAwesome from "@expo/vector-icons/FontAwesome";

import { isLoaded, useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { AppProvider, useAuth } from "@/src/context/appContext";
import { ActivityIndicator, View } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
if(!loaded)return;

  return (
    <>
      <AppProvider>
        <RootLayoutNav />
      </AppProvider>
    </>
  );
}

function RootLayoutNav() {
  const {user, isLoading, isOnboarded} = useAuth();
  const segment = useSegments();
  const router = useRouter();
  
  useEffect(() => {
    if(isLoading)return;

    if (!isOnboarded){
      router.replace("/(onboarding)/welcome");
    }
    else {
      const inAuthGroup = segment[0] === "(auth)";
      const inTabsGroup = segment[0] === "(tabs)";

    if (!user && !inAuthGroup ) {
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      router.replace("/(tabs)/home");
    }
  }
  }, [user, isOnboarded, segment]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack> 
  );
}
