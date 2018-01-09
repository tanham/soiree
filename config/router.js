import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import Results from '../src/screens/Results';

export const Tabs = TabNavigator({
  Home: {
    screen: 'Home',
  },
  Results: {
    screen: 'Results',
  },
});
