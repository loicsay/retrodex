import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import PokemonList from "./components/PokemonList";
import Menu from "./Menu";
import pokemons from "../../data/pokemons.json";

const Pokedex = () => {
  const [selection, setSelection] = useState(1);

  return (
    <View style={styles.listContainer}>
      <PokemonList pokemons={pokemons} selection={selection} setSelection={setSelection}/>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    paddingTop: "14%",
    backgroundColor: "rgb(235, 235, 235)",
    minHeight: "100%"
  }
});

export default Pokedex;
