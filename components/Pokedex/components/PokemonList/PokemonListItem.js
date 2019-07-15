import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import PokemonText from "../../../PokemonText";

const PokemonListItem = ({ pokemon, selected, setSelection }) => {
  const handleOnPress = () => setSelection(pokemon.national_id);

  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <TouchableOpacity style={styles.listContainer} onPress={handleOnPress}>
      <View style={styles.id}>
        <PokemonText>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        {selected && (
          <Image
            style={styles.selector}
            resizeMode="contain"
            source={require("../../../../data/sprites/red-blue/selector.png")}
          />
        )}
        <View style={styles.pokemonName}>
          <PokemonText>{pokemon.names.en}</PokemonText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokemonListItem: {
    position: "relative"
  },
  pokemonName: {
    paddingLeft: "27%"
  },
  id: {
    paddingLeft: "8%"
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  selector: {
    height: 22,
    position: "absolute"
  }
});

export default PokemonListItem;
