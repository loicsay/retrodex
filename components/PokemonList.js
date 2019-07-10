import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "./PokemonText";

const PokemonList = () => (
  <View style={styles.listContainer}>
      <PokemonText>CONTENT</PokemonText>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 2.5,
  }
});

export default PokemonList;
