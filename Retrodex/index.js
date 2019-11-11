import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {UserSettingsProvider} from './context/UserSettings';
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

const Retrodex = () => (
  <UserSettingsProvider>
    <Navigation />
  </UserSettingsProvider>
);

export default Retrodex;
