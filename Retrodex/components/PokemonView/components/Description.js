import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import PokemonText from "../../PokemonText";
import PokemonSeparator from "../../PokemonSeparator";

const Description = ({ description }) => (
  <>
    <PokemonSeparator horizontal />
    <ScrollView style={styles.description}>
      <Text style={styles.text}>
        <PokemonText>{description}</PokemonText>
      </Text>
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  description: {
    height: "100%",
    paddingTop: "2%",
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  text: {
    lineHeight: 40
  }
});

export default Description;
