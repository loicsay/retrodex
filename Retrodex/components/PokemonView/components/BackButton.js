import React, { useState, useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { UserSettingsContext } from "../../../context/UserSettingsContext";
import PokemonText from "../../PokemonText";
import Selector from "../../Selector";
import text from "../../../text.json";

const BackButton = ({ selectSound, navigation }) => {
  const [pressed, setPressed] = useState(false);
  const [state] = useContext(UserSettingsContext);

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
      <PokemonText uppercase>{text.back[state.language]}</PokemonText>
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
