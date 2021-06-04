import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  defaultState,
  getAlreadyLaunched,
  initUserSettingsStorage,
  getUserSettingsStorage,
} from './utils';

const UserSettingsContext = React.createContext([{}, () => {}]);

const UserSettingsProvider = ({children}) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const initContextState = async () => {
      const alreadyLaunched = await getAlreadyLaunched();

      if (alreadyLaunched) {
        try {
          const userSettingsStorage = await getUserSettingsStorage();
          setState(userSettingsStorage);
        } catch (e) {
          initUserSettingsStorage();
        }
      } else {
        initUserSettingsStorage();
      }
    };

    initContextState();
  }, []);

  const setLanguage = language => {
    setState({...state, language});
    AsyncStorage.setItem('language', language);
  };

  const setVersion = version => {
    setState({...state, version});
    AsyncStorage.setItem('version', version);
  };

  return (
    <UserSettingsContext.Provider value={{...state, setLanguage, setVersion}}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export {UserSettingsContext, UserSettingsProvider};
