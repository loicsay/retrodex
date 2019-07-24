import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";
import PokemonSeparator from "../../../PokemonSeparator";

const Menu = () => (
  <>
    <PokemonSeparator />
    <View style={styles.menuContainer}>
      <View style={styles.menuSection}>
        <MenuItem label="VUS">151</MenuItem>
        <MenuItem label="PRIS">151</MenuItem>
      </View>
      <View style={styles.menuSection}>
        <MenuItem label="INFO" />
        <MenuItem label="CRI" />
        <MenuItem label="ZONE" />
      </View>
      <View style={styles.menuSection}>
        <MenuItem label="LANG" />
        <MenuItem label="VER" />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1
  },
  menuSection: {
    marginTop: 28,
    paddingBottom: 16,
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderBottomColor: "black"
  }
});

export default Menu;
