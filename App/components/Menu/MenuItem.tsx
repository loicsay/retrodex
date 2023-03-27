import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PokemonText from '../PokemonText';
import Selector from '../Selector';

interface Props {
  type: 'action' | 'view';
  label: string;
  onPress?: () => void;
  selected?: boolean;
}

const MenuItem = ({
  onPress,
  type,
  label,
  selected,
  children,
}: PropsWithChildren<Props>) => {
  if (type === 'action') {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        {selected && <Selector style={styles.selector} />}
        <PokemonText uppercase>{label}</PokemonText>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.menuItem}>
      <PokemonText uppercase>{label}</PokemonText>
      {children && <PokemonText uppercase>{children}</PokemonText>}
    </View>
  );
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
