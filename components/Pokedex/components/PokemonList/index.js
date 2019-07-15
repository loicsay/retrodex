import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import PokemonText from "../../../PokemonText";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons, selection, setSelection }) => (
  <View style={{ flex: 2.6 }}>
    <View style={styles.title}>
      <PokemonText>CONTENTS</PokemonText>
    </View>
    <ScrollView>
      <View style={{ paddingBottom: "12%" }}>
        {pokemons.map(p => (
          <PokemonListItem
            key={p.national_id}
            pokemon={p}
            selected={selection === p.national_id}
            setSelection={setSelection}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  title: {
    paddingLeft: "8%"
  }
});

export default PokemonList;
