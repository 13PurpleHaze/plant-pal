import React from 'react';
import Icon from '../Icon';

interface CheckBoxProps {
  checked?: boolean;
  size?: number;
  emptyColor: string;
  checkedColor: string;
  onPress?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, size, emptyColor, checkedColor, onPress }) => {
  return <Icon name={checked ? 'checkBoxChecked' : 'checkBoxEmpty'} color={checked ? checkedColor : emptyColor} size={size} onPress={onPress} />;
};

export default CheckBox;
