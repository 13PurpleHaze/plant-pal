import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { PropsWithChildren } from 'react';

const RootStack = createNativeStackNavigator();

const RootNavigator: React.FC<PropsWithChildren> = ({ children }) => {
  return <RootStack.Navigator></RootStack.Navigator>;
};

export default RootNavigator;
