import React from "react";
import { Text, StyleSheet } from "react-native";

const PokemonText = ({ children }) => (
  <Text style={styles.pokemonText}>{children}</Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    flex: 3,
    fontFamily: "pokemon-font",
    fontSize: 18
  }
});

export default PokemonText;
