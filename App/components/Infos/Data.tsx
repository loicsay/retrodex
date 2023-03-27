import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

import PokemonText from '../PokemonText';

interface Props {
  uppercase?: boolean;
  label: string;
}

const Data = ({uppercase, label, children}: PropsWithChildren<Props>) => (
  <View style={styles.data}>
    <PokemonText uppercase={uppercase}>{label}</PokemonText>
    <PokemonText>{children}</PokemonText>
  </View>
);

const styles = StyleSheet.create({
  data: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
  },
});

export default Data;
