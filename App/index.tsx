import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {PokedexStatusProvider} from './context/PokedexStatus';
import {UserSettingsProvider} from './context/UserSettings';
import {PokemonData} from './types/PokemonData';
import PokemonDetails from './views/PokemonDetails';
import PokemonList from './views/PokemonList';

export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetails: {pokemon: PokemonData};
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const Retrodex = () => (
  <UserSettingsProvider>
    <PokedexStatusProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="PokemonList"
            component={PokemonList}
            options={{headerShown: false}}
          />
          <Screen
            name="PokemonDetails"
            component={PokemonDetails}
            options={{headerShown: false}}
          />
        </Navigator>
      </NavigationContainer>
    </PokedexStatusProvider>
  </UserSettingsProvider>
);

export default Retrodex;
