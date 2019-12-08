import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {UserSettingsContext} from '../UserSettings';
import {defaultPokemonStatusStorage, getPokemonStatusStorage} from './utils';

const PokedexStatusContext = React.createContext([{}, () => {}]);

const PokedexStatusProvider = ({children}) => {
  const [state, setState] = useState(defaultPokemonStatusStorage);
  const {alreadyLaunched, version} = useContext(UserSettingsContext);

  useEffect(() => {
    const initContextState = async () => {
      if (alreadyLaunched) {
        try {
          const pokemonStatus = await getPokemonStatusStorage();
          setState(pokemonStatus);
        } catch (error) {
          console.log(error);
        }
      }
    };

    initContextState();
  }, [alreadyLaunched]);

  const setCatchedPokemon = async pokemonId => {
    const updatedCatched = {...state[version].catched, [pokemonId]: 'true'};
    const updatedVersion = {
      catched: updatedCatched,
      catchCount: state[version].catchCount + 1,
    };

    try {
      await AsyncStorage.setItem(version, JSON.stringify(updatedVersion));
      setState({...state, [version]: updatedVersion});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokedexStatusContext.Provider
      value={{
        catchCount: state[version].catchCount,
        catched: state[version].catched,
        setCatchedPokemon,
      }}>
      {children}
    </PokedexStatusContext.Provider>
  );
};

export {PokedexStatusContext, PokedexStatusProvider};
