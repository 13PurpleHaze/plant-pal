import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabStack = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return <TabStack.Navigator></TabStack.Navigator>;
};

export default TabNavigator;
