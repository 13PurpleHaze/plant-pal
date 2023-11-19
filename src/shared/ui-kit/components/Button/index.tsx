import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 24,
  },
  text: {
    ...fonts.smallTitle,
  },
});

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  mode: 'outlined' | 'contained' | 'contained-tonal';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, mode = 'contained' }) => {
  const { textStyle, containerStyle } = useMemo(() => {
    if (disabled) return { containerStyle: { backgroundColor: colors.overlay.lightGray }, textStyle: { color: colors.text.secondary } };
    switch (mode) {
      case 'outlined':
        return { containerStyle: { borderWidth: 2, borderColor: colors.text.normal }, textStyle: { color: colors.text.normal } };
      case 'contained':
        return { containerStyle: { backgroundColor: colors.bg.accent }, textStyle: { color: colors.text.white } };
      case 'contained-tonal':
        return { containerStyle: { backgroundColor: colors.bg.light }, textStyle: { color: colors.text.normal } };
    }
  }, [mode, disabled]);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]} disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
