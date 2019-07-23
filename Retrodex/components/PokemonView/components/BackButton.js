import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import PokemonText from "../../PokemonText";
import Selector from "../../Selector";

const BackButton = ({ selectSound, navigation }) => {
  const [pressed, setPressed] = useState(false);

  const handleOnPress = () => {
    selectSound.play();
    navigation.goBack();
  };

  const handleOnPressIn = () => setPressed(true);

  const handleOnPressOut = () => setPressed(false);

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={handleOnPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Selector style={styles.selector} pressed={pressed} />
      <PokemonText uppercase>Retour</PokemonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    bottom: "22%",
    padding: "8%",
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "rgb(245, 245, 245)"
  },
  selector: {
    height: 16
  }
});

export default BackButton;
