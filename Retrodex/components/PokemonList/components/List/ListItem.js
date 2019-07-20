import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import PokemonText from "../../../PokemonText";
import Selector from "../../../Selector";

const ListItem = ({
  pokemon,
  selectSound,
  selected,
  onPressItem,
  navigation
}) => {
  const [pressed, setPressed] = useState(false);

  const handleOnPressIn = () => {
    setPressed(true);
    onPressItem(pokemon.national_id);
  };

  const handleOnPressOut = () => setPressed(false);

  const handleOnPress = () => {
    selectSound.play();
    navigation.navigate("PokemonView", { pokemon, selectSound });
  };

  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      onPress={handleOnPress}
    >
      <View style={styles.id}>
        <PokemonText>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        {selected && <Selector style={styles.selector} pressed={pressed} />}
        <View style={styles.pokemonName}>
          <Image
            style={styles.pokeball}
            resizeMode="contain"
            source={require("../../../../../data/red-blue/sprites/pokeball.png")}
          />
          <PokemonText>{pokemon.names.fr}</PokemonText>
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
