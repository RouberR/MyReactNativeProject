import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../screens';

const MainStackNav = createNativeStackNavigator();
const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="MainHome"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNav.Screen name="MainHome" component={screens.Main} />
      <MainStackNav.Screen
        name="AuthAnimated"
        component={screens.AuthAnimated}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
