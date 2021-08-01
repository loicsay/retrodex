import React, { FC, useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { PokedexStatusContext } from '../context/PokedexStatus';
import { UserSettingsContext } from '../context/UserSettings';
import text from '../text';
import PokemonText from './PokemonText';

const catchSound = new Sound('catch.wav', Sound.MAIN_BUNDLE);
const releaseSound = new Sound('release.wav', Sound.MAIN_BUNDLE);

interface Props {
  pokemonId: number;
}

const CatchButton: FC<Props> = ({ pokemonId }) => {
  const { catched, releasePokemon } = useContext(PokedexStatusContext);
  const { language } = useContext(UserSettingsContext);
  const { setCatchedPokemon } = useContext(PokedexStatusContext);

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
      {!isCatched ? (
        <Image
          style={styles.pokeball}
          resizeMode="contain"
          source={require('../../data/red-blue-yellow/sprites/pokeball.png')}
        />
      ) : null}
      <PokemonText uppercase>{buttonLabel[language]}</PokemonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  catchButton: {
    position: 'absolute',
    bottom: '22%',
    right: 0,
    padding: '8%',
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: 'rgb(245, 245, 245)',
  },
  pokeball: {
    height: 18,
    width: 18,
    marginRight: 8,
  },
});

export default CatchButton;