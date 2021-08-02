import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const MenuSeparator: FC = () => (
  <>
    <View style={styles.firstLine} />
    <View style={styles.secondLine} />
  </>
);

const styles = StyleSheet.create({
  firstLine: {
    height: 3,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 2,
  },
  secondLine: {
    height: 5,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default MenuSeparator;
