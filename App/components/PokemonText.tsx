import React, {PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

interface Props {
  uppercase?: boolean;
}

const PokemonText = ({uppercase, children}: PropsWithChildren<Props>) => (
  <Text style={[styles.pokemonText, uppercase && styles.uppercase]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: 'pokemon-font',
    fontSize: deviceWidth > 320 ? 18 : 15,
    color: 'black',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

export default PokemonText;
