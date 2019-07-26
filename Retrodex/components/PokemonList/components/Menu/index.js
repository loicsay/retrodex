import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { UserSettingsContext } from "../../../../context/UserSettingsContext";
import MenuItem from "./MenuItem";
import PokemonSeparator from "../../../PokemonSeparator";
import text from "../../../../text.json";

const Menu = () => {
  const [state] = useContext(UserSettingsContext);
  const { language } = state;

  return (
    <>
      <PokemonSeparator />
      <View style={styles.menuContainer}>
        <View style={styles.menuSection}>
          <MenuItem label={text.seen[language]}>151</MenuItem>
          <MenuItem label={text.own[language]}>151</MenuItem>
        </View>
        <View style={styles.menuSection}>
          <MenuItem label={text.data[language]} />
          <MenuItem label={text.cry[language]} />
          <MenuItem label={text.area[language]} />
        </View>
        <View style={styles.menuSection}>
          <MenuItem label={text.language[language]} />
          <MenuItem label={text.version[language]} />
        </View>
      </View>
    </>
  );
};

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
