import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

import {UserSettingsContext} from '../../../../context/UserSettings';
import PokemonText from '../../../PokemonText';
import Selector from '../../../Selector';

const soundDelay = 100; // in ms

const ListItem = ({
  pokemon,
  action,
  selectSound,
  selected,
  setSelector,
  navigation,
  catched,
}) => {
  const [pressed, setPressed] = useState(false);
  const {language} = useContext(UserSettingsContext);

  const handleOnPressIn = () => {
    setPressed(true);
    setSelector(pokemon.national_id);
  };

  const handleOnPressOut = () => setPressed(false);

  const handleOnPress = () => {
    selectSound.play();

    switch (action) {
      case 'data':
        navigation.navigate('PokemonView', {pokemon, selectSound});
        break;
      case 'cry':
        const pokemonCry = new Sound(
          `cry${pokemon.national_id}.wav`,
          Sound.MAIN_BUNDLE,
          () => {
            setTimeout(() => {
              pokemonCry.play();
            }, soundDelay);
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
      style={styles.listContainer}
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
            style={[styles.pokeball, catched ? undefined : styles.transparent]}
            resizeMode="contain"
            source={require('../../../../../data/red-blue-yellow/sprites/pokeball.png')}
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

const listItemIsEqual = (prevProps, nextProps) => {
  if (prevProps.catched === nextProps.catched) {
    if (nextProps.selected) {
      prevProps.selected === nextProps.selected
        ? prevProps.action === nextProps.action
        : false;
    } else {
      return prevProps.selected === nextProps.selected;
    }
  } else {
    return false;
  }
};

export default React.memo(ListItem, listItemIsEqual);
