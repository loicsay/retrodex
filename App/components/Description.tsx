import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import PokemonText from './PokemonText';

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => (
  <ScrollView style={styles.description}>
    <Text style={styles.text}>
      <PokemonText>{description}</PokemonText>
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  description: {
    height: '100%',
    paddingTop: '2%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  text: {
    lineHeight: 40,
  },
});

export default Description;
