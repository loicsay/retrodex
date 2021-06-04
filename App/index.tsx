import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import PokemonList from './components/PokemonList';
import PokemonView from './components/PokemonView';
import {PokedexStatusProvider} from './context/PokedexStatus';
import {UserSettingsProvider} from './context/UserSettings';

const Stack = createStackNavigator();

const Retrodex = () => {
  return (
    <UserSettingsProvider>
      <PokedexStatusProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="PokemonList" component={PokemonList} />
            <Stack.Screen name="PokemonView" component={PokemonView} />
          </Stack.Navigator>
        </NavigationContainer>
      </PokedexStatusProvider>
    </UserSettingsProvider>
  );
};

export default Retrodex;
