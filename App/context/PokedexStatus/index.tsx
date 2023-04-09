import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import useUserSettingsContext from '../UserSettings';
import { defaultPokemonStatusStorage, getPokemonStatusStorage } from './utils';

type PokedexStatusState = {
  catchCount: number;
  catched: {
    [pokemonId: string]: 'true' | 'false';
  };
};

type Context = {
  setCatchedPokemon: (pokemonId: string) => Promise<void>;
  releasePokemon: (pokemonId: string) => Promise<void>;
} & PokedexStatusState;

const PokedexStatusContext = React.createContext<Context>({
  ...defaultPokemonStatusStorage,
  setCatchedPokemon: () => new Promise(() => {}),
  releasePokemon: () => new Promise(() => {}),
});

const PokedexStatusProvider = ({ children }: PropsWithChildren) => {
  const { alreadyLaunched, version } = useUserSettingsContext();

  const [state, setState] = useState<PokedexStatusState>(
    defaultPokemonStatusStorage,
  );

  useEffect(() => {
    const initContextState = async () => {
      if (alreadyLaunched) {
        try {
          const pokemonStatus = await getPokemonStatusStorage(version);
          setState(pokemonStatus);
        } catch (error) {
          console.log(error);
        }
      }
    };

    initContextState();
  }, [alreadyLaunched]);

  const setCatchedPokemon = async (pokemonId: string) => {
    const updatedCatched = { ...state.catched, [pokemonId]: 'true' as const };
    const updatedState = {
      catched: updatedCatched,
      catchCount: Object.values(updatedCatched).filter(
        (pokemonIsCatched) => pokemonIsCatched === 'true',
      ).length,
    };

    try {
      await AsyncStorage.setItem(version, JSON.stringify(updatedState));
      setState(updatedState);
    } catch (error) {
      console.log(error);
    }
  };

  const releasePokemon = async (pokemonId: string) => {
    const updatedCatched = { ...state.catched, [pokemonId]: 'false' as const };
    const updatedState = {
      catched: { ...state.catched, [pokemonId]: 'false' as const },
      catchCount: Object.values(updatedCatched).filter(
        (pokemonIsCatched) => pokemonIsCatched === 'true',
      ).length,
    };

    try {
      await AsyncStorage.setItem(version, JSON.stringify(updatedState));
      setState(updatedState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokedexStatusContext.Provider
      value={{
        ...state,
        setCatchedPokemon,
        releasePokemon,
      }}
    >
      {children}
    </PokedexStatusContext.Provider>
  );
};

export { PokedexStatusContext, PokedexStatusProvider };
export default () => useContext(PokedexStatusContext);
