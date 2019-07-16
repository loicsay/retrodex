import { createStackNavigator, createAppContainer } from "react-navigation";

import PokemonList from "./components/PokemonList";
import PokemonView from "./components/PokemonView";

const Retrodex = createStackNavigator({
  PokemonList: {
    screen: PokemonList
  },
  PokemonView: {
    screen: PokemonView
  }
});

export default createAppContainer(Retrodex);
