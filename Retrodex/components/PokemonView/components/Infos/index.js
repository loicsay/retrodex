import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import PokemonText from "../../../PokemonText";
import Data from "./Data";

const deviceWidth = Dimensions.get("window").width;

const Infos = ({ imageSource, pokemon }) => {
  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <View style={styles.infosContainer}>
      <View style={styles.pokemonImage}>
        <Image style={styles.image} source={imageSource} resizeMode="cover" />
        <View style={styles.pokemonNumber}>
          <Image
            style={styles.number}
            source={require("../../../../../data/sprites/red-blue/number.png")}
            resizeMode="cover"
          />
          <PokemonText>{pokemonId}</PokemonText>
        </View>
      </View>
      <View style={styles.pokemonData}>
        <Data>{pokemon.names.en}</Data>
        <Data>{pokemon.categories.en}</Data>
        <Data uppercase={false}>{`HT ${pokemon.height_us}`}</Data>
        <Data uppercase={false}>{`WT ${pokemon.weight_us}`}</Data>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infosContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  pokemonImage: {
    flex: 1,
    paddingLeft: 8,
    alignItems: "center"
  },
  pokemonNumber: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  number: {
    width: 32,
    height: 13,
    marginRight: 6
  },
  image: {
    height: deviceWidth / 2.5,
    width: deviceWidth / 2.5
  },
  pokemonData: {
    flex: 1.2,
    paddingLeft: "4%",
    justifyContent: "flex-end"
  }
});

export default Infos;
