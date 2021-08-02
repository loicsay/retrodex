import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import RNModal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
}

const Modal: FC<Props> = ({ isVisible, closeModal, children }) => (
  <RNModal
    isVisible={isVisible}
    animationIn="slideInUp"
    hasBackdrop
    backdropOpacity={0}
    onBackdropPress={closeModal}>
    <View style={styles.modal}>{children}</View>
  </RNModal>
);

const styles = StyleSheet.create({
  modal: {
    padding: 38,
    backgroundColor: 'rgb(245, 245, 245)',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'black',
  },
});

export default Modal;
