import React, {useContext} from 'react';
import {View} from 'react-native';

import {PokedexStatusContext} from '../../../../context/PokedexStatus';
import text from '../../../../text';
import MenuItem from './MenuItem';

import {VIEW} from '../constants';

const ViewMenu = ({style, language}) => {
  const {catchCount} = useContext(PokedexStatusContext);

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
