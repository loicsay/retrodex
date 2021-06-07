import React from "react";
import { View, StyleSheet } from "react-native";

import PokemonText from "../../../PokemonText";

const Data = ({ uppercase = false, label, children }) => (
  <View style={styles.data}>
    <PokemonText uppercase={uppercase}>{label}</PokemonText>
    <PokemonText>{children}</PokemonText>
  </View>
);

const styles = StyleSheet.create({
  data: {
    flexDirection: "row",
    marginTop: "8%",
    justifyContent: "space-between"
  }
});

export default Data;
