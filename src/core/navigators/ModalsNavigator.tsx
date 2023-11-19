import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const ModalsStask = createNativeStackNavigator();

const ModalsNavigator: React.FC = () => {
  return <ModalsStask.Navigator></ModalsStask.Navigator>;
};

export default ModalsNavigator;
