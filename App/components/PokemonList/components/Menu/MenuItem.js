import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import PokemonText from "../../../PokemonText";
import Selector from "../../../Selector";

import { ACTION, SETTINGS, VIEW } from "../constants";

const MenuItem = ({ handleOnPress, type, label, selected, children }) => {
  switch (type) {
    case ACTION:
      return (
        <TouchableOpacity style={styles.menuItem} onPress={handleOnPress}>
          {selected && <Selector style={styles.selector} />}
          <PokemonText uppercase>{label}</PokemonText>
        </TouchableOpacity>
      );
    case SETTINGS:
      return (
        <TouchableOpacity style={styles.menuItem}>
          {selected && <Selector style={styles.selector} />}
          <PokemonText uppercase>{label}</PokemonText>
        </TouchableOpacity>
      );
    case VIEW:
      return (
        <View style={styles.menuItem}>
          <PokemonText uppercase>{label}</PokemonText>
          {children && <PokemonText uppercase>{children}</PokemonText>}
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  menuItem: {
    justifyContent: "flex-end",
    paddingLeft: "24%",
    marginBottom: "14%"
  },
  selector: {
    height: 18
  }
});

export default MenuItem;
