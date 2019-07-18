import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const PokemonText = ({ uppercase = true, children }) => (
  <Text style={uppercase ? styles.pokemonTextUppercase : styles.pokemonText}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: "pokemon-font",
    fontSize: deviceWidth > 320 ? 18 : 15,
  },
  pokemonTextUppercase: {
    fontFamily: "pokemon-font",
    fontSize: deviceWidth > 320 ? 18 : 15,
    textTransform: "uppercase"
  }
});

export default PokemonText;
