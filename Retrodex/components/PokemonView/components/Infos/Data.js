import React from "react";
import { View, StyleSheet } from "react-native";

import PokemonText from "../../../PokemonText";

const Data = ({ uppercase = true, children }) => (
  <View style={styles.data}>
    <PokemonText uppercase={uppercase}>{children}</PokemonText>
  </View>
);

const styles = StyleSheet.create({
  data: {
    marginTop: "8%"
  }
});

export default Data;
