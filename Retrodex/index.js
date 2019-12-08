import React, {useEffect} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import {UserSettingsProvider} from './context/UserSettings';
import {PokedexStatusProvider} from './context/PokedexStatus';

import PokemonList from './components/PokemonList';
import PokemonView from './components/PokemonView';

const RootStack = createStackNavigator({
  PokemonList: {
    screen: PokemonList,
  },
  PokemonView: {
    screen: PokemonView,
  },
});

const Navigation = createAppContainer(RootStack);

const Retrodex = () => {
  return (
    <UserSettingsProvider>
      <PokedexStatusProvider>
        <Navigation />
      </PokedexStatusProvider>
    </UserSettingsProvider>
  );
};

export default Retrodex;
