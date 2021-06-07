import React, {useState} from 'react';
import {View} from 'react-native';

import MenuItem from '../MenuItem';
import SettingsModal from './SettingsModal';
import text from '../../../../../text';

import {SETTINGS, LANGUAGE, VERSION} from '../../constants';

const SettingsMenu = ({style, language}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalType, setModalType] = useState();

  const handleOnPress = (modalType) => () => {
    setModalType(modalType);
    setDisplayModal(true);
  };

  return (
    <View style={style}>
      <MenuItem
        type={SETTINGS}
        label={text.language[language]}
        onPress={handleOnPress(LANGUAGE)}
      />
      <MenuItem
        type={SETTINGS}
        label={text.version[language]}
        handleOnPress={handleOnPress(VERSION)}
      />
      <SettingsModal visible={displayModal} modalType={modalType} />
    </View>
  );
};

export default SettingsMenu;
