import React, { useState, useEffect, FC } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  defaultState,
  getAlreadyLaunched,
  initUserSettingsStorage,
  getUserSettingsStorage,
} from './utils';

type State = {
  alreadyLaunched: boolean;
  language: 'en' | 'fr';
  version: 'yellow' | 'red-blue';
};

type Context = {
  setLanguage: (language: 'en' | 'fr') => void;
  setVersion: (version: 'yellow' | 'red-blue') => void;
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

  const setLanguage = (language: 'en' | 'fr') => {
    setState({ ...state, language });
    AsyncStorage.setItem('language', language);
  };

  const setVersion = (version: 'yellow' | 'red-blue') => {
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
