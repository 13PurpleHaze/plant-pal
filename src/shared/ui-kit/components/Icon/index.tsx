import React from 'react';
import iconMap from './iconMap';
import { TouchableOpacity } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color, onPress }) => {
  const IconSvg = iconMap[name];
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconSvg style={{ color }} width={size} height={size} />
      </TouchableOpacity>
    );
  }

  return <IconSvg style={{ color }} width={size} height={size} />;
};

export default Icon;
