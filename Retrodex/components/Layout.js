import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }) => <View style={styles.layout}>{children}</View>;

const styles = StyleSheet.create({
  layout: {
    paddingTop: "14%",
    backgroundColor: "rgb(235, 235, 235)",
    minHeight: "100%"
  }
});

export default Layout;
