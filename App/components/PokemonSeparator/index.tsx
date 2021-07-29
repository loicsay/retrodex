import React from 'react';
import {FC} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import BorderCube from './BorderCube';

const deviceHeight = Dimensions.get('window').height;
const cubeHeight = 44;
// Removing 2 cubes because of space on top and bottom
const nbOfCubes = deviceHeight / cubeHeight - 2;

interface Props {
  horizontal?: boolean;
}

const PokemonSeparator: FC<Props> = ({horizontal}) => {
  const renderHorizontalBorderCubes = () => {
    let borderCubes = [];
    for (let i = 0; i < 9; i++) {
      if (i === 4) {
        borderCubes.push(<View key={i} style={{width: 28}} />);
      } else {
        borderCubes.push(<BorderCube key={i} horizontal />);
      }
    }

    return borderCubes;
  };

  const renderVerticalBorderCubes = () => {
    let borderCubes = [];
    for (let i = 0; i < nbOfCubes; i++) {
      borderCubes.push(<BorderCube key={i} />);
    }

    return borderCubes;
  };

  return horizontal ? (
    <View style={styles.pokemonHorizontalSeparator}>
      <View style={styles.horizontalLine} />
      <View style={styles.cubeContainer}>{renderHorizontalBorderCubes()}</View>
    </View>
  ) : (
    <View style={styles.pokemonVerticalSeparator}>
      <View style={styles.verticalLine} />
      {renderVerticalBorderCubes()}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonHorizontalSeparator: {
    justifyContent: 'center',
  },
  pokemonVerticalSeparator: {
    paddingTop: 8,
    alignContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    position: 'absolute',
    height: 5,
    width: '100%',
    backgroundColor: 'black',
  },
  verticalLine: {
    position: 'absolute',
    width: 5,
    height: '100%',
    backgroundColor: 'black',
  },
  cubeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PokemonSeparator;
