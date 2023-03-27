import {RouteProp} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '..';
import Layout from '../components/Layout';
import List from '../components/List';
import Menu from '../components/Menu';

type Props = RouteProp<RootStackParamList, 'PokemonList'>;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    minHeight: '100%',
  },
});

const PokemonList: FC<Props> = () => {
  const [action, setAction] = useState<'data' | 'cry'>('data');

  return (
    <Layout>
      <View style={styles.listContainer}>
        <List action={action} />
        <Menu currentAction={action} setAction={setAction} />
      </View>
    </Layout>
  );
};

export default PokemonList;
