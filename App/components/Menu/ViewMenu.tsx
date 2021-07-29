import React, {FC, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {PokedexStatusContext} from '../../context/PokedexStatus';
import {UserSettingsContext} from '../../context/UserSettings';
import text from '../../text';
import {VIEW} from '../constants';
import MenuItem from './MenuItem';

interface Props {
  style: StyleProp<ViewStyle>;
}

const ViewMenu: FC<Props> = ({style}) => {
  const {catchCount} = useContext(PokedexStatusContext);
  const {language} = useContext(UserSettingsContext);

  return (
    <View style={style}>
      <MenuItem type={VIEW} label={text.seen[language]}>
        151
      </MenuItem>
      <MenuItem type={VIEW} label={text.own[language]}>
        {String(catchCount)}
      </MenuItem>
    </View>
  );
};

export default ViewMenu;
