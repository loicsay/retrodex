import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "../../../PokemonText";

const MenuItem = ({ label, children }) => (
  <View style={styles.menuItem}>
    <PokemonText>{label}</PokemonText>
    {children && <PokemonText>{children}</PokemonText>}
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    paddingLeft: "24%",
    marginBottom: "8%"
  }
});

export default MenuItem;
