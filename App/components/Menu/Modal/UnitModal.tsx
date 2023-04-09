import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';
import useUserSettingsContext from '../../../context/UserSettings';
import text from '../../../text';
import { Unit } from '../../../types';
import Modal from '../../Modal';
import PokemonText from '../../PokemonText';
import Selector from '../../Selector';

const selectSound = new Sound('select.wav', Sound.MAIN_BUNDLE);

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const UnitModal: FC<Props> = ({ showModal, closeModal }) => {
  const { language, unit, setUnit } = useUserSettingsContext();

  return (
    <Modal isVisible={showModal} closeModal={closeModal}>
      <View style={styles.title}>
        <PokemonText uppercase>{text.unit[language]}</PokemonText>
      </View>

      {[Unit.Metric, Unit.Imperial].map((unitItem) => {
        const isCurrentUnit = unit === unitItem;

        const handleOnPress = () => {
          selectSound.play();
          setUnit(unitItem);
        };

        return (
          <TouchableOpacity
            key={unitItem}
            style={styles.item}
            onPress={handleOnPress}
          >
            <Selector
              style={[styles.selector, !isCurrentUnit && styles.hide]}
            />
            <PokemonText uppercase>{text[unitItem][language]}</PokemonText>
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

export default UnitModal;
