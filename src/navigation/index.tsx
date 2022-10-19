import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './main';

const RootStackNav = createNativeStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNav.Screen name="Main" component={MainStack} />
    </RootStackNav.Navigator>
  );
};

export default RootStack;
