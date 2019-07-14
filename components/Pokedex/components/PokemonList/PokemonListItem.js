import React from "react";
import { View, StyleSheet, Text } from "react-native";

import PokemonText from "../../../PokemonText";

const PokemonListItem = ({ pokemon }) => {
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <View style={styles.listContainer}>
      <View style={styles.id}>
        <PokemonText>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        <Text>=></Text>
        <View style={styles.pokemonName}>
          <PokemonText>{pokemon.names.en}</PokemonText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonListItem: {
    position: "relative"
  },
  pokemonName: {
    paddingLeft: "22%"
  },
  id: {
    paddingLeft: "8%"
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
});

export default PokemonListItem;
