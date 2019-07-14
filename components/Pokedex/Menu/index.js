import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";

const Menu = () => (
  <View style={styles.menuContainer}>
    <MenuItem label="SEEN">151</MenuItem>
    <MenuItem label="OWN">151</MenuItem>
  </View>
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    height: "100%",
    marginTop: "6%"
  }
});

export default Menu;
