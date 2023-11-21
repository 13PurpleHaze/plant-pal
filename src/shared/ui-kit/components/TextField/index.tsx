import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.ui.icon.accent,
    ...fonts.text,
  },
});

interface TextFieldProps extends TextInputProps {}

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <TextInput style={styles.textInput} {...props} />;
};

export default TextField;
