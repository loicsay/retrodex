import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  horizontal?: boolean;
}

const BorderCube: FC<Props> = ({horizontal}) => (
  <Image
    style={[styles.borderCube, horizontal && styles.horizontal]}
    resizeMode="contain"
    source={
      horizontal
        ? require('../../../data/red-blue-yellow/sprites/border-cube-horizontal.png')
        : require('../../../data/red-blue-yellow/sprites/border-cube.png')
    }
  />
);

const styles = StyleSheet.create({
  borderCube: {
    height: 16,
    width: 18,
    marginTop: 28,
  },
  horizontal: {marginTop: 0},
});

export default BorderCube;
