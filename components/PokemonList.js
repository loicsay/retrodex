import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonText from "./PokemonText";
import PokemonListItem from './PokemonListItem';

const PokemonList = ({ pokemons }) => (
  <View style={styles.listContainer}>
    <PokemonText>CONTENTS</PokemonText>
    {pokemons.map(p => (
      <PokemonListItem key={p.national_id} pokemon={p} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 2.5
  }
});

export default PokemonList;
