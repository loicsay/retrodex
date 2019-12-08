import React, {useState, useEffect, useContext} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

import text from '../../../../text.json';
import {UserSettingsContext} from '../../../../context/UserSettings';
import PokemonText from '../../../PokemonText';
import ListItem from './ListItem';
import {PokedexStatusContext} from '../../../../context/PokedexStatus/index.js';

let selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

const List = ({pokemons, navigation, action}) => {
  const [selection, setSelection] = useState(new Map());
  const {language} = useContext(UserSettingsContext);
  const {catched} = useContext(PokedexStatusContext);

  useEffect(() => {
    setSelector(1);
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const setSelector = id => {
    const selection = new Map(selection);

    selection.set(id, !selection.get(id));
    setSelection(selection);
  };

  const renderItem = ({item}) => (
    <ListItem
      key={item.national_id}
      pokemon={item}
      catched={catched[item.national_id]}
      action={action}
      selected={Boolean(selection.get(item.national_id))}
      setSelector={setSelector}
      selectSound={selectSound}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.list}>
      <View style={styles.title}>
        <PokemonText uppercase>{text.contents[language]}</PokemonText>
      </View>
      <FlatList
        style={styles.listContainer}
        data={pokemons}
        extraData={{selection}}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{margin: '14%'}} />}
      />
    </View>
  );
};

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

export default List;
