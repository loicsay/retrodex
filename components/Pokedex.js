import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import PokemonList from "./PokemonList";
import RightMenu from "./RightMenu";
import pokemons from "../data/pokemons";

const Pokedex = () => {
  return (
    <View style={styles.listContainer}>
      <PokemonList pokemons={pokemons} />
      <RightMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: "6%",
    flexDirection: "row"
  }
});

export default Pokedex;
