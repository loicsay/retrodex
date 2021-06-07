import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../..';
import Layout from '../Layout';
import pokemons from '../../../data/pokemons.json';
import List from './components/List';
import Menu from './components/Menu';

type Props = RouteProp<RootStackParamList, 'PokemonList'>;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    minHeight: '100%',
  },
});

const PokemonList: FC<Props> = () => {
  const [action, setAction] = useState('data');

  return (
    <Layout>
      <View style={styles.listContainer}>
        <List pokemons={pokemons} action={action} />
        <Menu currentAction={action} setAction={setAction} />
      </View>
    </Layout>
  );
};

export default PokemonList;
