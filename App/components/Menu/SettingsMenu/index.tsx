import React, { FC, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Sound from 'react-native-sound';
import useUserSettingsContext from '../../../context/UserSettings';
import text from '../../../text';
import MenuItem from '../MenuItem';
import LanguageModal from '../Modal/LanguageModal';
import UnitModal from '../Modal/UnitModal';
import VersionModal from '../Modal/VersionModal';

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  style: StyleProp<ViewStyle>;
}

const SettingsMenu: FC<Props> = ({ style }) => {
  const { language } = useUserSettingsContext();

  const [showModal, setShowModal] =
    useState<'language' | 'version' | 'unit' | null>(null);

  const handleOpenLanguageModal = () => {
    selectSound.play();
    setShowModal('language');
  };

  const handleOpenVersionModal = () => {
    selectSound.play();
    setShowModal('version');
  };

  const handleOpenUnitModal = () => {
    selectSound.play();
    setShowModal('unit');
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <View style={style}>
      <MenuItem
        type="action"
        label={text.lang[language]}
        onPress={handleOpenLanguageModal}
        selected={showModal === 'language'}
      />
      <MenuItem
        type="action"
        label={text.ver[language]}
        onPress={handleOpenVersionModal}
        selected={showModal === 'version'}
      />
      <MenuItem
        type="action"
        label={text.unitShort[language]}
        onPress={handleOpenUnitModal}
        selected={showModal === 'unit'}
      />

      <LanguageModal
        showModal={showModal === 'language'}
        closeModal={handleCloseModal}
      />
      <VersionModal
        showModal={showModal === 'version'}
        closeModal={handleCloseModal}
      />
      <UnitModal
        showModal={showModal === 'unit'}
        closeModal={handleCloseModal}
      />
    </View>
  );
};

export default SettingsMenu;
