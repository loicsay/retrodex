import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import PokemonText from '../PokemonText';

interface Props {
  uppercase?: boolean;
  label: string;
}

const Data: FC<Props> = ({uppercase, label, children}) => (
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
