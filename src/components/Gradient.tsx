import React from "react";
import { Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export const GradientText = ({ text, colors, style }) => (
  <MaskedView maskElement={<Text style={[style, styles.text]}>{text}</Text>}>
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    />
  </MaskedView>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
