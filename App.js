import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Pokedex from "./components/Pokedex";

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Pokedex />
  </>
);

export default App;
