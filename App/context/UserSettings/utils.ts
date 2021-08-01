import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';
import { Languages, Version } from '../../types';
import { initPokemonStatusStorage } from '../PokedexStatus/utils';

const supportedLanguage = {
  [Languages.En]: true,
  [Languages.Fr]: true,
  [Languages.De]: false,
};

const getDeviceLanguage = () => {
  const deviceLanguage: Languages = (
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.NSLanguages[0]
      : NativeModules.I18nManager.localeIdentifier
  ).substring(0, 2); // Get only language, not location

  // Fallback to english if language is not supported
  return supportedLanguage[deviceLanguage] ? deviceLanguage : Languages.En;
};

export const defaultState = {
  alreadyLaunched: false,
  language: getDeviceLanguage() as Languages,
  version: Version.RedBlue as const,
};

export const initUserSettingsStorage = () => {
  const { language, version } = defaultState;

  AsyncStorage.setItem('alreadyLaunched', 'true');
  AsyncStorage.setItem('language', language);
  AsyncStorage.setItem('version', version);

  // Initialize the status of the pokedex for PokedexStatus Context
  initPokemonStatusStorage();
};

export const getUserSettingsStorage = async () => ({
  alreadyLaunched: (await AsyncStorage.getItem('alreadyLaunched')) === 'true',
  language:
    ((await AsyncStorage.getItem('language')) as Languages) || Languages.En,
  version:
    ((await AsyncStorage.getItem('version')) as Version) || Version.RedBlue,
});

export const getAlreadyLaunched = async () =>
  (await AsyncStorage.getItem('alreadyLaunched')) === 'true';
