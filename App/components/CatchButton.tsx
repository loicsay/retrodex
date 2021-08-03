import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import usePokedexStatusContext from '../context/PokedexStatus';
import useUserSettingsContext from '../context/UserSettings';
import text from '../text';
import PokemonText from './PokemonText';

const catchSound = new Sound('catch_pokemon.wav', Sound.MAIN_BUNDLE);
const releaseSound = new Sound('release.wav', Sound.MAIN_BUNDLE);

interface Props {
  pokemonId: number;
}

const CatchButton: FC<Props> = ({ pokemonId }) => {
  const { catched, setCatchedPokemon, releasePokemon } =
    usePokedexStatusContext();
  const { language } = useUserSettingsContext();

  const isCatched = catched[pokemonId] === 'true';

  const handleOnPress = () => {
    if (isCatched) {
      releasePokemon(pokemonId.toString());
      releaseSound.play();
    } else {
      setCatchedPokemon(pokemonId.toString());
      catchSound.play();
    }
  };

  const buttonLabel = isCatched ? text.release : text.catch;

  return (
    <TouchableOpacity style={styles.catchButton} onPress={handleOnPress}>
      {!isCatched && (
        <Image
          style={styles.pokeball}
          resizeMode="contain"
          source={require('../../data/red-blue-yellow/sprites/pokeball.png')}
        />
      )}
      <PokemonText uppercase>{buttonLabel[language]}</PokemonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  catchButton: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: 'transparent',
  },
  pokeball: {
    position: 'relative',
    height: 18,
    width: 18,
    marginRight: 8,
  },
});

export default CatchButton;
