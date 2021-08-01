import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ACTION, SETTINGS, VIEW } from '../constants';
import PokemonText from '../PokemonText';
import Selector from '../Selector';

interface Props {
  type: 'action' | 'settings' | 'view';
  label: string;
  onPress?: () => void;
  selected?: boolean;
}

const MenuItem: FC<Props> = ({ onPress, type, label, selected, children }) => {
  switch (type) {
    case ACTION:
      return (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
          {selected && <Selector style={styles.selector} />}
          <PokemonText uppercase>{label}</PokemonText>
        </TouchableOpacity>
      );
    case SETTINGS:
      return (
        <TouchableOpacity style={styles.menuItem}>
          {selected && <Selector style={styles.selector} />}
          <PokemonText uppercase>{label}</PokemonText>
        </TouchableOpacity>
      );
    case VIEW:
      return (
        <View style={styles.menuItem}>
          <PokemonText uppercase>{label}</PokemonText>
          {children && <PokemonText uppercase>{children}</PokemonText>}
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  menuItem: {
    justifyContent: 'flex-end',
    paddingLeft: '24%',
    marginBottom: '14%',
  },
  selector: {
    height: 18,
  },
});

export default MenuItem;
