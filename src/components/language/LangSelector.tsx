// import React, { useCallback, useMemo, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import { BottomSheetModal, BottomSheetFlatList } from "@gorhom/bottom-sheet";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { AntDesign, Entypo } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";

// type langProps = {
//   id: string;
//   label: string;
// };
// const languages = [
//   { id: "1", label: "English (United Kingdom)" },
//   { id: "2", label: "English (United States)" },
//   { id: "3", label: "Español (España)" },
//   { id: "4", label: "Français (France)" },
//   { id: "5", label: "Deutsch (Deutschland)" },
//   { id: "6", label: "中文 (简体)" },
//   { id: "7", label: "日本語" },
//   { id: "8", label: "한국어" },
//   { id: "9", label: "Português (Brasil)" },
//   { id: "10", label: "Русский" },
//   { id: "11", label: "Deutsch (Deutschland)" },
//   { id: "12", label: "中文 (简体)" },
//   { id: "13", label: "日本語" },
//   { id: "14", label: "한국어" },
//   { id: "15", label: "Português (Brasil)" },
//   { id: "16", label: "Русский" },
//   { id: "17", label: "Русский" },
//   { id: "18", label: "Русский" },
// ];

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     "English (United Kingdom)"
//   );

//   const snapPoints = useMemo(() => ["70%", "70%"], []);
//   const sheetRef = useRef<BottomSheetModal>(null);

//   const renderLanguageItem = ({ item }: { item: langProps }) => (
//     <TouchableOpacity
//       className=" mb-3"
//       onPress={() => handleLanguageSelect(item)}
//     >
//       <Text className="text-white">{item.label}</Text>
//     </TouchableOpacity>
//   );

//   const handleLanguageSelect = (item: langProps) => {
//     setSelectedLanguage(item.label);
//     sheetRef.current?.dismiss();
//   };

//   const openModal = () => {
//     sheetRef.current?.present();
//   };
//   const closeModal = () => {
//     sheetRef.current?.close();
//   };

//   const GradientBackground = () => (
//     <LinearGradient
//       colors={["#515BD4", "#8134AF"]}
//       start={{x:0.3, y:0.6}}
//       end={{x:0.2, y:0.3}}
//       style={StyleSheet.absoluteFillObject}
//     />
//   );

//   return (
//     <View>
//       <TouchableOpacity
//         className="flex-1 flex-row justify-center items-center"
//         onPress={openModal}
//       >
//         <Text className="text-white text-sm font-bold">{selectedLanguage}</Text>
//         <Entypo name="chevron-down" size={24} color="white" />
//       </TouchableOpacity>

//       <BottomSheetModal
//         snapPoints={snapPoints}
//         ref={sheetRef}
//         index={0}
//         onChange={() => handleLanguageSelect}
//         backgroundComponent={GradientBackground}
//       >
//        <TouchableOpacity onPress={closeModal}>
//        <AntDesign className="ml-6" name="close" size={24} color="white" />

//        </TouchableOpacity>
//          <View
//     style={{
//       flex: 1,
//       backgroundColor: "#8134AF", // Solid background fallback
//       paddingTop: 1, // Adjust for modal content spacing
//       marginHorizontal:30
//     }}
//   >
//     <Text className="text-white font-bold text-xl">Select Language</Text>
//     <BottomSheetFlatList
//       data={languages}
//       keyExtractor={(i) => i.id}
//       renderItem={renderLanguageItem}
//       contentContainerStyle={{
//         paddingVertical: 10,
//         paddingHorizontal: 20,
        
//         flex: 1, // Ensures the FlatList occupies full space
//       }}
//       style={{
//         flex: 1, // Ensures full height for FlatList
//         backgroundColor: "#000", // Matches modal background
//         shadowColor: "#aaa", // iOS shadow
//         shadowOffset: { width: 3, height: 1 },
//         shadowOpacity: 0.45,
//         shadowRadius: 3.84,
//         elevation: 8, // Android shadow
        
//       }}
//     />
//   </View>

//       </BottomSheetModal>
//     </View>
//   );
// };

// export default LanguageSelector;





import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { BottomSheetModal, BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type langProps = {
  id: string;
  label: string;
};
const languages = [
  { id: "1", label: "English (United Kingdom)" },
  { id: "2", label: "English (United States)" },
  { id: "3", label: "Español (España)" },
  { id: "4", label: "Français (France)" },
  { id: "5", label: "Deutsch (Deutschland)" },
  { id: "6", label: "中文 (简体)" },
  { id: "7", label: "日本語" },
  { id: "8", label: "한국어" },
  { id: "9", label: "Português (Brasil)" },
  { id: "10", label: "Русский" },
  { id: "11", label: "Deutsch (Deutschland)" },
  { id: "12", label: "中文 (简体)" },
  { id: "13", label: "日本語" },
  { id: "14", label: "한국어" },
  { id: "15", label: "Português (Brasil)" },
  { id: "16", label: "Русский" },
  { id: "17", label: "Русский" },
  { id: "18", label: "Русский" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    "English (United Kingdom)"
  );

  const snapPoints = useMemo(() => ["70%", "70%"], []);
  const sheetRef = useRef<BottomSheetModal>(null);

  const renderLanguageItem = ({ item }: { item: langProps }) => (
    <TouchableOpacity
      className="mb-3"
      onPress={() => handleLanguageSelect(item)}
    >
      <Text className="text-white">{item.label}</Text>
    </TouchableOpacity>
  );

  const handleLanguageSelect = (item: langProps) => {
    setSelectedLanguage(item.label);
    sheetRef.current?.dismiss();
  };

  const openModal = () => {
    sheetRef.current?.present();
  };
  const closeModal = () => {
    sheetRef.current?.close();
  };

  const GradientBackground = () => (
    <LinearGradient
      colors={["#515BD4", "#8134AF"]}
      start={{ x: 0.3, y: 0.6 }}
      end={{ x: 0.2, y: 0.3 }}
      style={StyleSheet.absoluteFillObject}
    />
  );

  return (
    <View className="flex-1">
      <TouchableOpacity
        className="flex-row justify-center items-center p-4"
        onPress={openModal}
      >
        <Text className="text-white text-sm font-bold">{selectedLanguage}</Text>
        <Entypo name="chevron-down" size={24} color="white" />
      </TouchableOpacity>

      <BottomSheetModal
        snapPoints={snapPoints}
        ref={sheetRef}
        index={0}
        onChange={() => handleLanguageSelect}
        backgroundComponent={GradientBackground}
      >
        <TouchableOpacity onPress={closeModal} className="absolute top-4 right-4 p-2">
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "#8134AF", // Solid background fallback
            paddingTop: 1, // Adjust for modal content spacing
            marginHorizontal: 30,
          }}
        >
          <Text className="text-white font-bold text-xl">Select Language</Text>
          <BottomSheetFlatList
            data={languages}
            keyExtractor={(i) => i.id}
            renderItem={renderLanguageItem}
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              flex: 1, // Ensures the FlatList occupies full space
            }}
            style={{
              backgroundColor: "#000", // Matches modal background
              shadowColor: "#aaa", // iOS shadow
              shadowOffset: { width: 3, height: 1 },
              shadowOpacity: 0.45,
              shadowRadius: 3.84,
              elevation: 8, // Android shadow
            }}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default LanguageSelector;
