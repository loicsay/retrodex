import {useNavigation} from '@react-navigation/core';
import React, {FC, useContext, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';
import {UserSettingsContext} from '../../context/UserSettings';
import {PokemonData} from '../../types/PokemonData';
import PokemonText from '../PokemonText';
import Selector from '../Selector';

const SOUND_DELAY = 100; // in ms

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  action: 'data' | 'cry' | 'area';
  selected: boolean;
  setSelector: (id: number) => void;
  catched: 'true' | 'false';
  pokemon: PokemonData;
}

const ListItem: FC<Props> = ({
  pokemon,
  action,
  selected,
  setSelector,
  catched,
}) => {
  const [pressed, setPressed] = useState(false);
  const {language} = useContext(UserSettingsContext);

  const navigation = useNavigation();

  const handleOnPressIn = () => {
    setPressed(true);
    setSelector(pokemon.national_id);
  };

  const handleOnPressOut = () => {
    setPressed(false);
  };

  const handleOnPress = () => {
    selectSound.play();

    switch (action) {
      case 'data':
        navigation.navigate('PokemonDetails', {pokemon});
        break;
      case 'cry':
        const pokemonCry = new Sound(
          `cry${pokemon.national_id}.wav`,
          Sound.MAIN_BUNDLE,
          () => {
            setTimeout(() => {
              pokemonCry.play();
            }, SOUND_DELAY);
          },
        );
        break;
      case 'area':
        break;
      default:
    }
  };

  // Transform the national id with 3 numbers
  const pokemonId = `00${pokemon.national_id}`.slice(-3);

  return (
    <TouchableOpacity
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      onPress={handleOnPress}>
      <View style={styles.pokemonId}>
        <PokemonText uppercase>{pokemonId}</PokemonText>
      </View>
      <View style={styles.rowContainer}>
        {selected && <Selector style={styles.selector} pressed={pressed} />}
        <View style={styles.pokemonName}>
          <Image
            style={[
              styles.pokeball,
              catched === 'false' ? styles.transparent : undefined,
            ]}
            resizeMode="contain"
            source={require('../../../data/red-blue-yellow/sprites/pokeball.png')}
          />
          <PokemonText uppercase>{pokemon.names[language]}</PokemonText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokemonName: {
    paddingLeft: '22%',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  pokemonId: {
    paddingLeft: '8%',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    height: 22,
  },
  pokeball: {
    height: 16,
    width: 16,
  },
  transparent: {
    opacity: 0,
  },
});

const listItemIsEqual = (prevProps: Props, nextProps: Props) => {
  if (prevProps.catched !== nextProps.catched) {
    return false;
  }

  if (prevProps.selected !== nextProps.selected) {
    return false;
  }

  if (prevProps.selected === nextProps.selected) {
    return prevProps.action === nextProps.action;
  }

  return true;
};

export default React.memo(ListItem, listItemIsEqual);
