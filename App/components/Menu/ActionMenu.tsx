import React, { Dispatch, FC, SetStateAction } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import useUserSettingsContext from '../../context/UserSettings';
import text from '../../text';
import { CRY, DATA } from '../constants';
import MenuItem from './MenuItem';

interface Props {
  style: StyleProp<ViewStyle>;
  currentAction: 'data' | 'cry';
  setAction: Dispatch<SetStateAction<'data' | 'cry'>>;
}

const ActionMenu: FC<Props> = ({ style, currentAction, setAction }) => {
  const { language } = useUserSettingsContext();

  const generateHandleOnPress = (action: 'data' | 'cry') => () =>
    setAction(action);

  return (
    <View style={style}>
      <MenuItem
        onPress={generateHandleOnPress(DATA)}
        type="action"
        label={text.data[language]}
        selected={currentAction === DATA}
      />
      <MenuItem
        onPress={generateHandleOnPress(CRY)}
        type="action"
        label={text.cry[language]}
        selected={currentAction === CRY}
      />
    </View>
  );
};

export default ActionMenu;
