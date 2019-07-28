import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { UserSettingsContext } from "../../../../context/UserSettingsContext";
import PokemonText from "../../../PokemonText";
import Selector from "../../../Selector";

const ListItem = ({
  pokemon,
  action,
  selectSound,
  selected,
  setSelector,
  navigation
}) => {
  const [pressed, setPressed] = useState(false);
  const { language } = useContext(UserSettingsContext);

  const handleOnPressIn = () => {
    setPressed(true);
    setSelector(pokemon.national_id);
  };

  const handleOnPressOut = () => setPressed(false);

  const handleOnPress = () => {
    selectSound.play();

    switch (action) {
      case "data":
        navigation.navigate("PokemonView", { pokemon, selectSound });
      case "cry":
        break;
      case "area":
        break;
      default:
    }
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
        <PokemonText uppercase>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        {selected && <Selector style={styles.selector} pressed={pressed} />}
        <View style={styles.pokemonName}>
          <Image
            style={styles.pokeball}
            resizeMode="contain"
            source={require("../../../../../data/red-blue-yellow/sprites/pokeball.png")}
          />
          <PokemonText uppercase>{pokemon.names[language]}</PokemonText>
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
    height: 22
  },
  pokeball: {
    height: 16,
    width: 16
  }
});

const selectedIsEqual = (prevProps, nextProps) =>
  prevProps.selected === nextProps.selected &&
  prevProps.action === nextProps.action;

export default React.memo(ListItem, selectedIsEqual);
