import React from 'react';
import { ScrollView, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import CuratedResults from '../src/screens/CuratedResults';
import DateSearch from '../src/screens/DateSearch';
import Header from '../src/components/Header';

const MyHomeScreen = ({ navigation }) => (
  <ScrollView>
    <Button
      onPress={() => navigation.navigate('DateSearch', { name: 'Date Search'})}
      title="Date Search"
    />

    <Home />

    <Button
      onPress={() => navigation.navigate('CuratedResults', { name: 'Results'})}
      title="See More"
    />

  </ScrollView>
);

export const StackNav = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    navigationOptions: {
      title: 'Soirée',
    }
  },
  DateSearch: {
    screen: DateSearch,
    navigationOptions: {
      title: 'Date Search',
    }
  },
  CuratedResults: {
    screen: CuratedResults,
    navigationOptions: {
      title: 'Results',
    }
  },
});
