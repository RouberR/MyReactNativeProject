import React from 'react';
import {AppRegistry} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {name as appName} from './app.json';
import Root from './App';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
