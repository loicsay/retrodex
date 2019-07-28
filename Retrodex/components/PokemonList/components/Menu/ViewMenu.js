import React from "react";
import { View } from "react-native";

import MenuItem from "./MenuItem";
import text from "../../../../text.json";

import { VIEW } from "../constants";

const ViewMenu = ({ style, language }) => (
  <View style={style}>
    <MenuItem type={VIEW} label={text.seen[language]}>
      151
    </MenuItem>
    <MenuItem type={VIEW} label={text.own[language]}>
      151
    </MenuItem>
  </View>
);

export default ViewMenu;
