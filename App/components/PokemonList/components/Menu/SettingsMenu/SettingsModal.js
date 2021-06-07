import React from "react";
import { Modal, View, Text } from "react-native";

const SettingsModal = ({ visible, modalType }) => (
  <Modal visible={visible}>
    <View>
      <Text>Hello!</Text>
    </View>
  </Modal>
);

export default SettingsModal;
