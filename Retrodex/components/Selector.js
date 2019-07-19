import React from "react";
import { Image } from "react-native";

const Selector = ({ style, pressed = false }) => {
  const imageSource = pressed
    ? require("../../data/red-blue/sprites/selector-white.png")
    : require("../../data/red-blue/sprites/selector.png");

  return <Image style={style} resizeMode="contain" source={imageSource} />;
};

export default Selector;
