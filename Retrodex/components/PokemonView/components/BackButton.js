import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import PokemonText from "../../PokemonText";

const BackButton = ({ navigation }) => {
  const [pressIn, setPressIn] = useState(false);

  const handleOnPress = () => navigation.goBack();

  const handleOnPressIn = () => setPressIn(true);

  const handleOnPressOut = () => setPressIn(false);

  const imageSource = pressIn
    ? require("../../../../data/sprites/red-blue/selector-white.png")
    : require("../../../../data/sprites/red-blue/selector.png");

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
    bottom: "26%",
    paddingLeft: "6%",
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "rgb(245, 245, 245)",
  },
  selector: {
    height: 16
  }
});

export default BackButton;
