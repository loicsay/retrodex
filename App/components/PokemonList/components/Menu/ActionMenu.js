import React from "react";
import { View } from "react-native";

import MenuItem from "./MenuItem";
import text from "../../../../text.json";

import { ACTION, DATA, CRY, AREA } from "../constants";

const ActionMenu = ({ style, language, currentAction, setAction }) => {
  const handleOnPress = action => () => setAction(action);

  return (
    <View style={style}>
      <MenuItem
        handleOnPress={handleOnPress(DATA)}
        type={ACTION}
        label={text.data[language]}
        selected={currentAction === DATA}
      />
      <MenuItem
        handleOnPress={handleOnPress(CRY)}
        type={ACTION}
        label={text.cry[language]}
        selected={currentAction === CRY}
      />
      <MenuItem
        handleOnPress={handleOnPress(AREA)}
        type={ACTION}
        label={text.area[language]}
        selected={currentAction === AREA}
      />
    </View>
  );
};

export default ActionMenu;
