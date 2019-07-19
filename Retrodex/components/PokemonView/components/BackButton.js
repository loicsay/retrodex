import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import PokemonText from "../../PokemonText";

const BackButton = ({ navigation }) => {
  const [pressIn, setPressIn] = useState(false);

  const handleOnPress = () => navigation.goBack();

  const handleOnPressIn = () => setPressIn(true);

  const handleOnPressOut = () => setPressIn(false);

  const imageSource = pressIn
    ? require("../../../../data/red-blue/sprites/selector-white.png")
    : require("../../../../data/red-blue/sprites/selector.png");

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={handleOnPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Image
        style={styles.selector}
        resizeMode="contain"
        source={imageSource}
      />
      <PokemonText>Back</PokemonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    bottom: "22%",
    padding: "4%",
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "rgb(245, 245, 245)",
  },
  selector: {
    height: 16
  }
});

export default BackButton;
