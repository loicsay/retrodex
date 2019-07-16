import React from "react";
import { Text, StyleSheet } from "react-native";

const PokemonText = ({ uppercase = true, children }) => (
  <Text style={uppercase ? styles.pokemonTextUppercase : styles.pokemonText}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: "pokemon-font",
    fontSize: 18,
  },
  pokemonTextUppercase: {
    fontFamily: "pokemon-font",
    fontSize: 18,
    textTransform: "uppercase"
  }
});

export default PokemonText;
