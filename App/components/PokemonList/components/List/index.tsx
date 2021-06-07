import React, {useState, useEffect, useContext, FC} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

import text from '../../../../text';
import {PokemonData} from '../../../../types/PokemonData';
import {UserSettingsContext} from '../../../../context/UserSettings';
import {PokedexStatusContext} from '../../../../context/PokedexStatus';
import PokemonText from '../../../PokemonText';
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
});

let selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  pokemons: PokemonData[];
  action: 'data' | 'cry' | 'area';
}

const List: FC<Props> = ({pokemons, action}) => {
  const [selection, setSelection] = useState(new Map());
  const {language} = useContext(UserSettingsContext);
  const {catched} = useContext(PokedexStatusContext);

  useEffect(() => {
    setSelector(1);
  }, []);

  const keyExtractor = (_item: PokemonData, index: number) => index.toString();

  const setSelector = (id: number) => {
    const updatedSelection = new Map(selection);

    updatedSelection.set(id, !selection.get(id));
    setSelection(updatedSelection);
  };

  return (
    <View style={styles.list}>
      <View style={styles.title}>
        <PokemonText uppercase>
          {text.contents[language as 'en' | 'fr']}
        </PokemonText>
      </View>
      <FlatList<PokemonData>
        style={styles.listContainer}
        data={pokemons}
        extraData={{selection}}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <ListItem
            key={item.national_id}
            pokemon={item}
            catched={catched[item.national_id]}
            action={action}
            selected={Boolean(selection.get(item.national_id))}
            setSelector={setSelector}
            selectSound={selectSound}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{margin: '14%'}} />}
      />
    </View>
  );
};

export default List;
