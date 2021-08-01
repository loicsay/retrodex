import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import Sound from 'react-native-sound';
import { RootStackParamList } from '../..';
import BackButton from '../../components/BackButton';
import CatchButton from '../../components/CatchButton';
import Description from '../../components/Description';
import Infos from '../../components/Infos';
import Layout from '../../components/Layout';
import useUserSettingsContext from '../../context/UserSettings';
import getImageSource from './getImageSource';

const SOUND_DELAY_IN_MS = 200;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'PokemonDetails'>;
  route: RouteProp<RootStackParamList, 'PokemonDetails'>;
}

const PokemonView: FC<Props> = ({ route: { params }, navigation }) => {
  const { language } = useUserSettingsContext();

  const { pokemon } = params;

  useEffect(() => {
    if (!params) {
      return;
    }

    const pokemonCry = new Sound(
      `cry${pokemon.national_id}.wav`,
      Sound.MAIN_BUNDLE,
      () => {
        setTimeout(() => {
          pokemonCry.play();
        }, SOUND_DELAY_IN_MS);
      },
    );

    return () => {
      pokemonCry.release();
    };
  }, []);

  if (!params) {
    return null;
  }

  return (
    <Layout>
      <View>
        <Infos
          imageSource={getImageSource('red-blue', pokemon.national_id)}
          pokemon={pokemon}
        />
        <Description
          description={pokemon.pokedex_entries['red-blue'][language]}
        />
      </View>
      <BackButton navigation={navigation} />
      <CatchButton pokemonId={pokemon.national_id} />
    </Layout>
  );
};

export default PokemonView;
