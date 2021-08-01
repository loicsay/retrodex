import React, { useState, useEffect, useContext, FC } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserSettingsContext } from '../UserSettings';
import { defaultPokemonStatusStorage, getPokemonStatusStorage } from './utils';

type VersionState = {
  catchCount: number;
  catched: {
    [pokemonId: string]: 'true' | 'false';
  };
};

type Context = {
  setCatchedPokemon: (pokemonId: string) => Promise<void>;
  releasePokemon: (pokemonId: string) => Promise<void>;
} & VersionState;

type State = {
  'red-blue': VersionState;
  yellow: VersionState;
};

const PokedexStatusContext = React.createContext<Context>({
  ...defaultPokemonStatusStorage['red-blue'],
  setCatchedPokemon: () => new Promise(() => {}),
  releasePokemon: () => new Promise(() => {}),
});

const PokedexStatusProvider: FC = ({ children }) => {
  const [state, setState] = useState<State>(defaultPokemonStatusStorage);
  const { alreadyLaunched, version } = useContext(UserSettingsContext);

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

  const setCatchedPokemon = async (pokemonId: string) => {
    const updatedCatched = { ...state[version].catched, [pokemonId]: 'true' };
    const updatedVersion = {
      catched: updatedCatched,
      catchCount: state[version].catchCount + 1,
    };

    try {
      await AsyncStorage.setItem(version, JSON.stringify(updatedVersion));
      setState({ ...state, [version]: updatedVersion });
    } catch (error) {
      console.log(error);
    }
  };

  const releasePokemon = async (pokemonId: string) => {
    const updatedCatched = { ...state[version].catched, [pokemonId]: 'false' };
    const updatedVersion = {
      catched: updatedCatched,
      catchCount: state[version].catchCount - 1,
    };

    try {
      await AsyncStorage.setItem(version, JSON.stringify(updatedVersion));
      setState({ ...state, [version]: updatedVersion });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokedexStatusContext.Provider
      value={{
        ...state[version],
        setCatchedPokemon,
        releasePokemon,
      }}>
      {children}
    </PokedexStatusContext.Provider>
  );
};

export { PokedexStatusContext, PokedexStatusProvider };
export default () => useContext(PokedexStatusContext);
