import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import usePokedexStatusContext from '../../context/PokedexStatus';
import useUserSettingsContext from '../../context/UserSettings';
import text from '../../text';
import MenuItem from './MenuItem';

interface Props {
  style: StyleProp<ViewStyle>;
}

const ViewMenu: FC<Props> = ({ style }) => {
  const { catchCount } = usePokedexStatusContext();
  const { language } = useUserSettingsContext();

  return (
    <View style={style}>
      <MenuItem type="view" label={text.seen[language]}>
        151
      </MenuItem>
      <MenuItem type="view" label={text.own[language]}>
        {String(catchCount)}
      </MenuItem>
    </View>
  );
};

export default ViewMenu;
