import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {UserSettingsContext} from '../../context/UserSettings';
import text from '../../text';
import {ACTION, AREA, CRY, DATA} from '../constants';
import MenuItem from './MenuItem';

interface Props {
  style: StyleProp<ViewStyle>;
  currentAction: 'data' | 'cry' | 'area';
  setAction: Dispatch<SetStateAction<'data' | 'cry' | 'area'>>;
}

const ActionMenu: FC<Props> = ({style, currentAction, setAction}) => {
  const {language} = useContext(UserSettingsContext);

  const generateHandleOnPress = (action: 'data' | 'cry' | 'area') => () =>
    setAction(action);

  return (
    <View style={style}>
      <MenuItem
        onPress={generateHandleOnPress(DATA)}
        type={ACTION}
        label={text.data[language]}
        selected={currentAction === DATA}
      />
      <MenuItem
        onPress={generateHandleOnPress(CRY)}
        type={ACTION}
        label={text.cry[language]}
        selected={currentAction === CRY}
      />
      <MenuItem
        onPress={generateHandleOnPress(AREA)}
        type={ACTION}
        label={text.area[language]}
        selected={currentAction === AREA}
      />
    </View>
  );
};

export default ActionMenu;
