import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Sound from "react-native-sound";

import PokemonText from "../../../PokemonText";
import ListItem from "./ListItem";

const selectSound = new Sound("select.wav", Sound.MAIN_BUNDLE);
selectSound.setVolume(0.6);

const List = ({ pokemons, navigation }) => {
  const [selection, setSelection] = useState(new Map());

  useEffect(() => {
    onPressItem(1);
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const onPressItem = id => {
    const selection = new Map(selection);
    selection.set(id, !selection.get(id));
    setSelection(selection);
  };

  const renderItem = ({ item }) => (
    <ListItem
      key={item.national_id}
      pokemon={item}
      selected={Boolean(selection.get(item.national_id))}
      onPressItem={onPressItem}
      selectSound={selectSound}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.list}>
      <View style={styles.title}>
        <PokemonText>SOMMAIRE</PokemonText>
      </View>
      <FlatList
        style={styles.listContainer}
        data={pokemons}
        extraData={{ selection }}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ margin: "14%" }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 2.6
  },
  listContainer: {
    paddingBottom: 200
  },
  title: {
    paddingLeft: "8%"
  }
});

export default List;
