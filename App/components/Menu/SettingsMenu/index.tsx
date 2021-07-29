import React, {FC, useContext, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {UserSettingsContext} from '../../../context/UserSettings';
import text from '../../../text';
import {LANGUAGE, SETTINGS, VERSION} from '../../constants';
import MenuItem from '../MenuItem';
import SettingsModal from './SettingsModal';

interface Props {
  style: StyleProp<ViewStyle>;
}

const SettingsMenu: FC<Props> = ({style}) => {
  const {language} = useContext(UserSettingsContext);

  const [displayModal, setDisplayModal] = useState(false);
  const [modalType, setModalType] = useState<'language' | 'version'>();

  const handleOnPress = (newModalType: 'language' | 'version') => () => {
    setModalType(newModalType);
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
        onPress={handleOnPress(VERSION)}
      />
      <SettingsModal visible={displayModal} modalType={modalType} />
    </View>
  );
};

export default SettingsMenu;
