import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Languages, Version, Unit } from '../../types';
import {
  defaultState,
  getAlreadyLaunched,
  getUserSettingsStorage,
  initUserSettingsStorage,
} from './utils';

type State = {
  alreadyLaunched: boolean;
  language: Languages;
  version: Version;
  unit: Unit;
};

type Context = {
  setLanguage: (language: Languages) => void;
  setVersion: (version: Version) => void;
  setUnit: (unit: Unit) => void;
} & State;

const UserSettingsContext = React.createContext<Context>({
  ...defaultState,
  setLanguage: () => {},
  setVersion: () => {},
  setUnit: () => {},
});

const UserSettingsProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<State>(defaultState);

  useEffect(() => {
    const initContextState = async () => {
      const alreadyLaunched = await getAlreadyLaunched();

      if (alreadyLaunched) {
        try {
          const userSettingsStorage = await getUserSettingsStorage();
          setState(userSettingsStorage);
        } catch {
          initUserSettingsStorage();
        }
      } else {
        initUserSettingsStorage();
      }
    };

    initContextState();
  }, []);

  const setLanguage = (language: Languages) => {
    setState({ ...state, language });
    AsyncStorage.setItem('language', language);
  };

  const setVersion = (version: Version) => {
    setState({ ...state, version });
    AsyncStorage.setItem('version', version);
  };

  const setUnit = (unit: Unit) => {
    setState({ ...state, unit });
    AsyncStorage.setItem('unit', unit);
  };

  return (
    <UserSettingsContext.Provider
      value={{ ...state, setLanguage, setVersion, setUnit }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

export { UserSettingsContext, UserSettingsProvider };
export default () => useContext(UserSettingsContext);
