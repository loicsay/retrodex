import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';
import useUserSettingsContext from '../../../context/UserSettings';
import text from '../../../text';
import { Version } from '../../../types';
import Modal from '../../Modal';
import PokemonText from '../../PokemonText';
import Selector from '../../Selector';

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const VersionModal: FC<Props> = ({ showModal, closeModal }) => {
  const { language, version, setVersion } = useUserSettingsContext();

  return (
    <Modal isVisible={showModal} closeModal={closeModal}>
      <View style={styles.title}>
        <PokemonText uppercase>{text.version[language]}</PokemonText>
      </View>

      {[Version.RedBlue, Version.Yellow].map((versionItem) => {
        const isCurrentVersion = version === versionItem;

        const handleOnPress = () => {
          selectSound.play();
          setVersion(versionItem);
        };

        return (
          <TouchableOpacity
            key={versionItem}
            style={styles.item}
            onPress={handleOnPress}
          >
            <Selector
              style={[styles.selector, !isCurrentVersion && styles.hide]}
            />
            <PokemonText uppercase>{text[versionItem][language]}</PokemonText>
          </TouchableOpacity>
        );
      })}
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: '10%',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: '4%',
  },
  hide: {
    opacity: 0,
  },
  selector: {
    position: 'relative',
    width: 18,
    height: 18,
    marginRight: '4%',
  },
});

export default VersionModal;
