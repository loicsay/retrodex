import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {UserSettingsContext} from '../../../../context/UserSettings';
import ViewMenu from './ViewMenu';
import ActionMenu from './ActionMenu';
import SettingsMenu from './SettingsMenu';
import PokemonSeparator from '../../../PokemonSeparator';

const Menu = ({currentAction, setAction}) => {
  const {language} = useContext(UserSettingsContext);

  return (
    <>
      <PokemonSeparator />
      <View style={styles.menuContainer}>
        <ViewMenu style={styles.menu} language={language} />
        <ActionMenu
          style={styles.menu}
          language={language}
          currentAction={currentAction}
          setAction={setAction}
        />
        <SettingsMenu style={styles.menu} language={language} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
  menu: {
    marginTop: 28,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
});

export default Menu;
