import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import List from "./components/List";
import Menu from "./components/Menu";
import pokemons from "../../../data/pokemons.json";
import Layout from "../Layout";

const PokemonList = ({ navigation }) => {
  const [selection, setSelection] = useState(1);

  return (
    <Layout>
      <View style={styles.listContainer}>
        <List
          pokemons={pokemons}
          selection={selection}
          setSelection={setSelection}
          navigation={navigation}
        />
        <Menu />
      </View>
    </Layout>
  );
};

PokemonList.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    minHeight: "100%"
  }
});

export default PokemonList;
