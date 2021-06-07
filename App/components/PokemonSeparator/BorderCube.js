import React from "react";
import { Image, StyleSheet } from "react-native";

const BorderCube = ({ horizontal }) => {
  const imgSource = horizontal
    ? require("../../../data/red-blue-yellow/sprites/border-cube-horizontal.png")
    : require("../../../data/red-blue-yellow/sprites/border-cube.png");

  return (
    <Image
      style={[styles.borderCube, horizontal && styles.horizontal]}
      resizeMode="contain"
      source={imgSource}
    />
  );
};

const styles = StyleSheet.create({
  borderCube: {
    height: 16,
    width: 18,
    marginTop: 28
  },
  horizontal: { marginTop: 0 }
});

export default BorderCube;
