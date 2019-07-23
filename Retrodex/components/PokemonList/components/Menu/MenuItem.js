import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "../../../PokemonText";

const MenuItem = ({ label, children }) => (
  <View style={styles.menuItem}>
    <PokemonText uppercase>{label}</PokemonText>
    {children && <PokemonText uppercase>{children}</PokemonText>}
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    paddingLeft: "24%",
    marginBottom: "8%"
  }
});

export default MenuItem;
