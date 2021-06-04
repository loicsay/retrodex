import React from "react";
import { Image } from "react-native";

const Selector = ({ style = null, pressed = false }) => {
  const imageSource = pressed
    ? require("../../data/red-blue-yellow/sprites/selector-white.png")
    : require("../../data/red-blue-yellow/sprites/selector.png");

  return (
    <Image
      style={[defaultStyle, style]}
      resizeMode="contain"
      source={imageSource}
    />
  );
};

const defaultStyle = {
  position: "absolute"
};

export default Selector;
