import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Languages, Version } from '../../types';
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
};

type Context = {
  setLanguage: (language: Languages) => void;
  setVersion: (version: Version) => void;
} & State;

const UserSettingsContext = React.createContext<Context>({
  ...defaultState,
  setLanguage: () => {},
  setVersion: () => {},
});

const UserSettingsProvider: FC = ({ children }) => {
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

  return (
    <UserSettingsContext.Provider value={{ ...state, setLanguage, setVersion }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export { UserSettingsContext, UserSettingsProvider };
export default () => useContext(UserSettingsContext);
