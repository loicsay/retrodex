import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import PokemonText from "../../../PokemonText";

const ListItem = ({
  pokemon,
  selectSound,
  selected,
  onPressItem,
  navigation
}) => {
  const handleOnPressIn = () => {
    onPressItem(pokemon.national_id);
  };

  const handleOnPress = () => {
    selectSound.play();
    navigation.navigate("PokemonView", { pokemon });
  };

  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPressIn={handleOnPressIn}
      onPress={handleOnPress}
    >
      <View style={styles.id}>
        <PokemonText>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        {selected && (
          <Image
            style={styles.selector}
            resizeMode="contain"
            source={require("../../../../../data/red-blue/sprites/selector.png")}
          />
        )}
        <View style={styles.pokemonName}>
          <Image
            style={styles.pokeball}
            resizeMode="contain"
            source={require("../../../../../data/red-blue/sprites/pokeball.png")}
          />
          <PokemonText>{pokemon.names.en}</PokemonText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokemonName: {
    paddingLeft: "22%",
    flexDirection: "row",
    alignItems: "baseline"
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
  },
  pokeball: {
    height: 16,
    width: 16
  }
});

const selectedIsEqual = (prevProps, nextProps) =>
  prevProps.selected === nextProps.selected;

export default React.memo(ListItem, selectedIsEqual);
