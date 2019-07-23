import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import PokemonText from "../../PokemonText";

const Description = ({ description }) => (
  <ScrollView style={styles.description}>
    <Text style={styles.text}>
      <PokemonText>{description}</PokemonText>
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  description: {
    height: "100%",
    marginTop: "4%",
    padding: "4%",
    borderStyle: "solid",
    borderTopWidth: 6,
    borderTopColor: "black"
  },
  text: {
    lineHeight: 40
  }
});

export default Description;
