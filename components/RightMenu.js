import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "./PokemonText";

const RightMenu = () => (
  <View style={styles.menuContainer}>
    <PokemonText>SEEN</PokemonText>
    <PokemonText>OWN</PokemonText>

  </View>
);

const styles = StyleSheet.create({
  menuContainer: {
    height: "100%",
    flex: 1,
    backgroundColor: "red"
  }
});

export default RightMenu;
