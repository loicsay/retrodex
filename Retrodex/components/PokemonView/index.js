import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import Sound from "react-native-sound";

import { UserSettingsContext } from "../../context/UserSettingsContext";
import Layout from "../Layout";
import Infos from "./components/Infos";
import Description from "./components/Description";
import BackButton from "./components/BackButton";
import getImageSource from "./utils";

const PokemonView = ({ navigation }) => {
  const { language } = useContext(UserSettingsContext);

  const pokemon = navigation.getParam("pokemon");
  const selectSound = navigation.getParam("selectSound");

  useEffect(() => {
    const pokemonCry = new Sound(
      `cry${pokemon.national_id}.wav`,
      Sound.MAIN_BUNDLE,
      () => {
        setTimeout(() => {
          pokemonCry.play();
        }, 200);
      }
    );

    return () => {
      pokemonCry.release();
    };
  }, []);

  return (
    <Layout>
      <View>
        <Infos
          imageSource={getImageSource("red-blue", pokemon.national_id)}
          pokemon={pokemon}
        />
        <Description
          description={pokemon.pokedex_entries["red-blue"][language]}
        />
      </View>
      <BackButton navigation={navigation} selectSound={selectSound} />
    </Layout>
  );
};

PokemonView.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

export default PokemonView;
