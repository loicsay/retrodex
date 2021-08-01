import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const Layout: FC = ({ children }) => (
  <SafeAreaView style={styles.layout}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  layout: {
    paddingTop: '1%',
    backgroundColor: 'rgb(245, 245, 245)',
    minHeight: '100%',
  },
});

export default Layout;
