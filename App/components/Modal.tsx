import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import RNModal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
}

const pokeballImageProps = {
  resizeMode: 'contain' as const,
  source: require('../../data/red-blue-yellow/sprites/pokeball-bw.png'),
};

const Modal = ({
  isVisible,
  closeModal,
  children,
}: PropsWithChildren<Props>) => (
  <RNModal
    isVisible={isVisible}
    animationIn="slideInUp"
    hasBackdrop
    backdropOpacity={0}
    onBackdropPress={closeModal}
  >
    <View style={styles.whiteBorder}>
      <View style={styles.border}>
        <Image {...pokeballImageProps} style={styles.borderTopLeft} />
        <Image {...pokeballImageProps} style={styles.borderTopRight} />
        <Image {...pokeballImageProps} style={styles.borderBottomRight} />
        <Image {...pokeballImageProps} style={styles.borderBottomLeft} />
        <View style={styles.modal}>{children}</View>
      </View>
    </View>
  </RNModal>
);

const pokeballBorderStyles = {
  position: 'absolute' as const,
  width: 18,
  height: 18,
  zIndex: 2,
};

const styles = StyleSheet.create({
  whiteBorder: {
    backgroundColor: 'rgb(245, 245, 245)',
    padding: 6,
  },
  border: {
    backgroundColor: 'rgb(245, 245, 245)',
    padding: 3,
    position: 'relative',

    borderColor: 'black',
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 5,
  },
  borderTopLeft: {
    ...pokeballBorderStyles,
    top: -6,
    left: -6,
  },
  borderTopRight: {
    ...pokeballBorderStyles,
    top: -6,
    right: -6,
  },
  borderBottomRight: {
    ...pokeballBorderStyles,
    bottom: -6,
    right: -6,
  },
  borderBottomLeft: {
    ...pokeballBorderStyles,
    bottom: -6,
    left: -6,
  },
  modal: {
    padding: 22,
    backgroundColor: 'rgb(245, 245, 245)',

    borderStyle: 'solid',
    borderColor: 'black',
    borderTopWidth: 5,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
  },
});

export default Modal;
