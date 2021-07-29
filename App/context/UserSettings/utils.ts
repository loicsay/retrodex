import {Platform, NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  initPokemonStatusStorage,
  defaultPokemonStatusStorage,
} from '../PokedexStatus/utils';

const supportedLanguage = {fr: true, en: true};

const getDeviceLanguage = () => {
  let deviceLanguage = (
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.NSLanguages[0]
      : NativeModules.I18nManager.localeIdentifier
  ).substring(0, 2); // Get only language, not location

  // Fallback to english if language is not supported
  return supportedLanguage[deviceLanguage as 'en' | 'fr']
    ? deviceLanguage
    : 'en';
};

export const defaultState = {
  alreadyLaunched: false,
  language: getDeviceLanguage() as 'en' | 'fr',
  version: 'red-blue' as const,
};

export const initUserSettingsStorage = () => {
  const {language, version} = defaultState;

  AsyncStorage.setItem('alreadyLaunched', 'true');
  AsyncStorage.setItem('language', language);
  AsyncStorage.setItem('version', version);
  // Initialize the status of the pokedex for PokedexStatus Context
  initPokemonStatusStorage();
};

export const getUserSettingsStorage = async () => ({
  alreadyLaunched: Boolean(
    (await AsyncStorage.getItem('alreadyLaunched')) === 'true',
  ),
  language: ((await AsyncStorage.getItem('language')) || 'en') as 'en' | 'fr',
  version: ((await AsyncStorage.getItem('version')) || 'red-blue') as
    | 'red-blue'
    | 'yellow',
});

export const getAlreadyLaunched = async () => {
  return Boolean((await AsyncStorage.getItem('alreadyLaunched')) === 'true');
};
