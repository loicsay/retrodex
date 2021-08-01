import React, { FC } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

interface Props {
  uppercase?: boolean;
}

const PokemonText: FC<Props> = ({ uppercase, children }) => (
  <Text style={[styles.pokemonText, uppercase && styles.uppercase]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  pokemonText: {
    fontFamily: 'pokemon-font',
    fontSize: deviceWidth > 320 ? 18 : 15,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

export default PokemonText;
