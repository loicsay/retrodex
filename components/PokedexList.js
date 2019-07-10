import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonList from "./PokemonList";
import RightMenu from "./RightMenu";

const PokedexList = () => (
  <View style={styles.listContainer}>
    <PokemonList />
    <RightMenu />
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    padding: "6%",
    flexDirection: "row"
  }
});

export default PokedexList;
