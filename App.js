import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";
import PokedexList from "./components/PokedexList";

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <PokedexList />
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "rgb(227, 223, 222)"
  },
  scrollView: {
    minHeight: "100%"
  }
});

export default App;
