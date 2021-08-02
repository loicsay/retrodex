import React, { FC } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import useUserSettingsContext from '../../context/UserSettings';
import text from '../../text';
import { PokemonData, Unit } from '../../types';
import PokemonText from '../PokemonText';
import Data from './Data';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  infosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: '1%',
  },
  pokemonImage: {
    flex: 1,
    paddingLeft: 8,
    alignItems: 'center',
  },
  pokemonNumber: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  number: {
    width: 32,
    height: 13,
    marginRight: 6,
  },
  image: {
    height: deviceWidth / 2.5,
    width: deviceWidth / 2.5,
  },
  pokemonData: {
    flex: 1.2,
    paddingLeft: '2%',
    paddingRight: '4%',
    justifyContent: 'flex-end',
  },
});

interface Props {
  imageSource: ImageSourcePropType;
  pokemon: PokemonData;
}

const Infos: FC<Props> = ({ imageSource, pokemon }) => {
  const { language, unit } = useUserSettingsContext();

  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  const isEuUnit = unit === Unit.Metric;

  return (
    <View style={styles.infosContainer}>
      <View style={styles.pokemonImage}>
        <Image style={styles.image} source={imageSource} resizeMode="cover" />
        <View style={styles.pokemonNumber}>
          <Image
            style={styles.number}
            source={require('../../../data/red-blue-yellow/sprites/number.png')}
            resizeMode="cover"
          />
          <PokemonText>{pokemonId}</PokemonText>
        </View>
      </View>
      <View style={styles.pokemonData}>
        <Data uppercase label={pokemon.names[language]} />
        <Data uppercase label={pokemon.categories[language]} />
        <Data uppercase label={text.height[language]}>
          {isEuUnit ? pokemon.height_eu : pokemon.height_us}
        </Data>
        <Data uppercase label={text.weight[language]}>
          {isEuUnit ? pokemon.weight_eu : pokemon.weight_us}
        </Data>
      </View>
    </View>
  );
};

export default Infos;
