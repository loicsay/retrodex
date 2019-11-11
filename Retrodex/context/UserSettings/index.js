import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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
    initContextState();
  }, []);

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

  const setLanguage = language => {
    setState({...state, language});
    AsyncStorage.setItem('language', language);
  };

  const setVersion = version => {
    setState({...state, version});
    AsyncStorage.setItem('version', version);
  };

  const {language, version} = state;

  return (
    <UserSettingsContext.Provider
      value={{language, setLanguage, version, setVersion}}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export {UserSettingsContext, UserSettingsProvider};
