import AsyncStorage from '@react-native-community/async-storage';

export const defaultPokemonStatusStorage = {
  'red-blue': {
    catchCount: 0,
    catched: {},
  },
  yellow: {
    catchCount: 0,
    catched: {},
  },
};

export const initPokemonStatusStorage = () => {
  AsyncStorage.setItem('red-blue', JSON.stringify(defaultState['red-blue']));
  AsyncStorage.setItem('yellow', JSON.stringify(defaultState['yellow']));
};

export const getPokemonStatusStorage = async () => ({
  'red-blue': JSON.parse(await AsyncStorage.getItem('red-blue')),
  yellow: JSON.parse(await AsyncStorage.getItem('yellow')),
});
