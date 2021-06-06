import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PokemonList'>;

import {RootStackParamList} from '../..';
import Layout from '../Layout';
import pokemons from '../../../data/pokemons.json';
import List from './components/List';
import Menu from './components/Menu';

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    minHeight: '100%',
  },
});

const PokemonList: FC = () => {
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
