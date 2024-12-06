// // src/context/AuthContext.tsx
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { createContext, useState, useEffect, ReactNode } from 'react';


// interface AuthContextType {
//   user: object | null;
//   setUser: (user: object | null) => void;
//   hasCompletedOnboarding: boolean;
//   setOnboardingComplete: (status: boolean) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<object | null>(null);
//   const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(false);

//   useEffect(() => {
//     const loadUserData = async () => {
//       const storedUser = await AsyncStorage.getItem('user');
//       const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
      
//       if (storedUser) setUser(JSON.parse(storedUser));
//       if (onboardingStatus === 'true') setHasCompletedOnboarding(true);
//     };

//     loadUserData();
//   }, []);

//   const setOnboardingComplete = async (status: boolean) => {
//     await AsyncStorage.setItem('onboardingCompleted', JSON.stringify(status));
//     setHasCompletedOnboarding(status);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, hasCompletedOnboarding, setOnboardingComplete }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };



// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Ensure you import AsyncStorage

interface AuthContextType {
  user: object | null;
  setUser: (user: object | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));  // Set the user if found
    };
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
