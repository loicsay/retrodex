import React, { FC } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
  pressed?: boolean;
}

const Selector: FC<Props> = ({ style, pressed }) => {
  const imageSource = pressed
    ? require('../../data/red-blue-yellow/sprites/selector-white.png')
    : require('../../data/red-blue-yellow/sprites/selector.png');

  return (
    <Image
      style={[defaultStyle, style]}
      resizeMode="contain"
      source={imageSource}
    />
  );
};

const defaultStyle = {
  position: 'absolute' as const,
};

export default Selector;
