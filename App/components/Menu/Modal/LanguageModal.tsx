import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';
import useUserSettingsContext from '../../../context/UserSettings';
import { supportedLanguage } from '../../../context/UserSettings/utils';
import text from '../../../text';
import { Languages } from '../../../types';
import Modal from '../../Modal';
import PokemonText from '../../PokemonText';
import Selector from '../../Selector';

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const LanguageModal: FC<Props> = ({ showModal, closeModal }) => {
  const { language, setLanguage } = useUserSettingsContext();

  return (
    <Modal isVisible={showModal} closeModal={closeModal}>
      <View style={styles.title}>
        <PokemonText uppercase>{text.language[language]}</PokemonText>
      </View>

      {Object.keys(supportedLanguage).map((langKey) => {
        const isLanguageSupported = supportedLanguage[langKey as Languages];
        const isCurrentLanguage = language === langKey;

        if (!isLanguageSupported) {
          return null;
        }

        const handleOnPress = () => {
          selectSound.play();
          setLanguage(langKey as Languages);
        };

        return (
          <TouchableOpacity
            key={langKey}
            style={styles.item}
            onPress={handleOnPress}>
            <Selector
              style={[styles.selector, !isCurrentLanguage && styles.hide]}
            />
            <PokemonText uppercase>
              {text.languages[langKey as Languages]}
            </PokemonText>
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

export default LanguageModal;
