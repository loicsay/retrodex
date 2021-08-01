import React, { FC, useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import pokemons from '../../../data/pokemons.json';
import { PokedexStatusContext } from '../../context/PokedexStatus';
import { UserSettingsContext } from '../../context/UserSettings';
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
  const [selection, setSelection] = useState(new Map());
  const { language } = useContext(UserSettingsContext);
  const { catched } = useContext(PokedexStatusContext);

  useEffect(() => {
    setSelector(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            selected={Boolean(selection.get(item.national_id))}
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