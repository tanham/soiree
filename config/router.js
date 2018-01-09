import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import Results from '../src/screens/Results';
import DateSearch from '../src/screens/DateSearch';

// export const Tabs = TabNavigator({
//   Home: {
//     screen: Home,
//   },
//   Results: {
//     screen: Results,
//   },
//   SamplePage: {
//     screen: SamplePage
//   },
// });

export const StackNav = StackNavigator({
  Home: {
    screen: Home,
  },
  DateSearch: {
    screen: DateSearch,
  },
  Results: {
    screen: Results,
  },
});
