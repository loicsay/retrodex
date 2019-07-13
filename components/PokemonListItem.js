import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "./PokemonText";

const PokemonListItem = ({ pokemon }) => (
  <View style={styles.listContainer}>
    <PokemonText>{pokemon.national_id}</PokemonText>
    <PokemonText>{pokemon.names.en}</PokemonText>
  </View>
);

const styles = StyleSheet.create({
  pokemonListItem: {}
});

export default PokemonListItem;
