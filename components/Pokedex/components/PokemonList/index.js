import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import PokemonText from "../../../PokemonText";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons }) => (
  <View syle={styles.listContainer}>
    <View style={styles.title}>
      <PokemonText>CONTENTS</PokemonText>
    </View>
    <ScrollView>
      {pokemons.map(p => (
        <PokemonListItem key={p.national_id} pokemon={p} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 2.8
  },
  title: {
    paddingLeft: "8%"
  }
});

export default PokemonList;
