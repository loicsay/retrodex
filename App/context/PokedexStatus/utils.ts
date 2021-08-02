import AsyncStorage from '@react-native-async-storage/async-storage';

import { Version } from '../../types';

export const defaultPokemonStatusStorage = {
  catchCount: 0,
  catched: {},
};

export const initPokemonStatusStorage = async () => {
  await AsyncStorage.setItem(
    Version.RedBlue,
    JSON.stringify(defaultPokemonStatusStorage),
  );
  await AsyncStorage.setItem(
    Version.Yellow,
    JSON.stringify(defaultPokemonStatusStorage),
  );
};

export const getPokemonStatusStorage = async (version: Version) => {
  const versionStorageData = await AsyncStorage.getItem(version);

  if (!versionStorageData) {
    return null;
  }

  return JSON.parse(versionStorageData);
};
