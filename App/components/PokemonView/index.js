import React, {useEffect, useContext} from 'react';
import {View} from 'react-native';
import Sound from 'react-native-sound';

import {UserSettingsContext} from '../../context/UserSettings';
import {PokedexStatusContext} from '../../context/PokedexStatus';
import Layout from '../Layout';
import Infos from './components/Infos';
import Description from './components/Description';
import BackButton from './components/BackButton';
import getImageSource from './utils';

const PokemonView = ({route, navigation}) => {
  const {language} = useContext(UserSettingsContext);
  const {setCatchedPokemon} = useContext(PokedexStatusContext);

  useEffect(() => {
    if (!route.params) {
      return;
    }

    const {pokemon} = route.params;

    const pokemonCry = new Sound(
      `cry${pokemon.national_id}.wav`,
      Sound.MAIN_BUNDLE,
      () => {
        setTimeout(() => {
          pokemonCry.play();
        }, 200);
      },
    );
    setCatchedPokemon(pokemon.national_id);

    return () => {
      pokemonCry.release();
    };
  }, []);

  if (!route.params) {
    return null;
  }

  const {pokemon, selectSound} = route.params;

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
      <BackButton navigation={navigation} selectSound={selectSound} />
    </Layout>
  );
};

PokemonView.navigationOptions = {
  headerStyle: {
    display: 'none',
  },
};

export default PokemonView;
