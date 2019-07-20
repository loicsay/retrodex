import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";

const Menu = () => (
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
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    borderStyle: "solid",
    borderLeftWidth: 4,
    borderLeftColor: "black"
  },
  menuSection: {
    marginTop: 28,
    borderStyle: "solid",
    borderBottomWidth: 4,
    borderBottomColor: "black"
  }
});

export default Menu;
