import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const PokemonText = ({ uppercase = false, children }) => (
  <Text style={[styles.pokemonText, uppercase && styles.uppercase]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: "pokemon-font",
    fontSize: deviceWidth > 320 ? 18 : 15
  },
  uppercase: {
    textTransform: "uppercase"
  }
});

export default PokemonText;
