import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { UserSettingsContext } from '../../context/UserSettings';
import text from '../../text';
import { ACTION, CRY, DATA } from '../constants';
import MenuItem from './MenuItem';

interface Props {
  style: StyleProp<ViewStyle>;
  currentAction: 'data' | 'cry';
  setAction: Dispatch<SetStateAction<'data' | 'cry'>>;
}

const ActionMenu: FC<Props> = ({ style, currentAction, setAction }) => {
  const { language } = useContext(UserSettingsContext);

  const generateHandleOnPress = (action: 'data' | 'cry') => () =>
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
    </View>
  );
};

export default ActionMenu;
