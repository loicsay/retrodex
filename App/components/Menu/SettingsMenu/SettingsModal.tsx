import React, {FC} from 'react';
import {Modal, Text, View} from 'react-native';

interface Props {
  visible?: boolean;
}

const SettingsModal: FC<Props> = ({visible}) => (
  <Modal visible={visible}>
    <View>
      <Text>Hello!</Text>
    </View>
  </Modal>
);

export default SettingsModal;
