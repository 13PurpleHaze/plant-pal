import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import CheckBox from '../CheckBox';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.bg.light,
    backgroundColor: colors.bg.normal,
  },
  content: {},
  title: {
    ...fonts.text,
  },
  subtitle: {
    ...fonts.smallText,
  },
});

interface CardReminderProps {
  title?: string;
  subtitle?: string;
  checked?: boolean;
  style?: ViewProps['style'];
  onPress?: () => void;
}

const CardReminder: React.FC<CardReminderProps> = ({ title, subtitle, checked, style, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <CheckBox checkedColor={colors.ui.icon.accent} emptyColor={colors.ui.icon.light} checked={checked} onPress={onPress} />
    </View>
  );
};

export default CardReminder;
