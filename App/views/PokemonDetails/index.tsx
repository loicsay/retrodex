import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import {RootStackParamList} from '../..';
import BackButton from '../../components/BackButton';
import CatchButton from '../../components/CatchButton';
import Description from '../../components/Description';
import Infos from '../../components/Infos';
import Layout from '../../components/Layout';
import PokemonSeparator from '../../components/PokemonSeparator';
import useUserSettingsContext from '../../context/UserSettings';
import getImageSource from './getImageSource';

const SOUND_DELAY_IN_MS = 200;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'PokemonDetails'>;
  route: RouteProp<RootStackParamList, 'PokemonDetails'>;
}

const PokemonView: FC<Props> = ({route: {params}, navigation}) => {
  const {language, version} = useUserSettingsContext();

  const {pokemon} = params;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <Infos
          imageSource={getImageSource(version, pokemon.national_id)}
          pokemon={pokemon}
        />
        <PokemonSeparator horizontal />
        <ScrollView>
          <Description
            description={pokemon.pokedex_entries[version][language]}
          />
        </ScrollView>
        <View style={styles.bottomSection}>
          <BackButton navigation={navigation} />
          <CatchButton pokemonId={pokemon.national_id} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSection: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingBottom: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PokemonView;
