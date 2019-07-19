import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Sound from "react-native-sound";

import PokemonText from "../../../PokemonText";
import ListItem from "./ListItem";

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

const List = ({ pokemons, selection, setSelection, navigation }) => (
  <View style={styles.list}>
    <View style={styles.title}>
      <PokemonText>CONTENTS</PokemonText>
    </View>
    <ScrollView>
      <View style={styles.listContainer}>
        {pokemons.map(pokemon => (
          <ListItem
            key={pokemon.national_id}
            pokemon={pokemon}
            selected={selection === pokemon.national_id}
            setSelection={setSelection}
            navigation={navigation}
            selectSound={selectSound}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  list: {
    flex: 2.6
  },
  listContainer: {
    paddingBottom: 90
  },
  title: {
    paddingLeft: "8%"
  }
});

export default List;
