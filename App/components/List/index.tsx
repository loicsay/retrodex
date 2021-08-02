import React, { FC, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import pokemons from '../../../data/pokemons.json';
import usePokedexStatusContext from '../../context/PokedexStatus';
import useUserSettingsContext from '../../context/UserSettings';
import text from '../../text';
import { PokemonData } from '../../types';
import PokemonText from '../PokemonText';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  list: {
    flex: 2.6,
  },
  listContainer: {
    paddingBottom: 200,
  },
  title: {
    paddingLeft: '8%',
  },
  footerPadding: {
    margin: '14%',
  },
});

interface Props {
  action: 'data' | 'cry' | 'area';
}

const List: FC<Props> = ({ action }) => {
  const { language } = useUserSettingsContext();
  const { catched } = usePokedexStatusContext();
  const [selection, setSelection] = useState<Map<number, boolean>>(new Map());

  useEffect(() => {
    setSelector(1);
  }, []);

  const setSelector = (id: number) => {
    const updatedSelection = new Map();
    updatedSelection.set(id, true);

    setSelection(updatedSelection);
  };

  return (
    <View style={styles.list}>
      <View style={styles.title}>
        <PokemonText uppercase>{text.contents[language]}</PokemonText>
      </View>
      <FlatList<PokemonData>
        style={styles.listContainer}
        data={pokemons}
        extraData={{ selection }}
        keyExtractor={(item) => item.national_id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.national_id}
            pokemon={item}
            catched={catched[item.national_id]}
            action={action}
            selected={selection.get(item.national_id) || false}
            setSelector={setSelector}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.footerPadding} />}
      />
    </View>
  );
};

export default List;
