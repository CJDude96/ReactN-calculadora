import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {btnStyles as styles} from '../theme/appTheme';

interface Props {
  content: string;
  color?: string;
  textColor?: 'black' | 'white';
  stend?: boolean;
  action: (pressedNumber: string) => void;
}

const BtnCalc = ({
  content,
  color = '#2D2D2D',
  textColor = 'white',
  stend = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.65} onPress={() => action(content)}>
      <View
        style={[
          styles.btnFormat,
          {backgroundColor: color, width: stend ? 160 : 70},
        ]}>
        <Text style={[styles.btnText, {color: textColor}]}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnCalc;
