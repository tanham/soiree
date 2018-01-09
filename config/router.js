import React from 'react';
import { ScrollView, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import Results from '../src/screens/Results';
import DateSearch from '../src/screens/DateSearch';
import Header from '../src/components/Header';

const MyHomeScreen = ({ navigation }) => (
  <ScrollView>

    <Header headerText={'Soiree'} />
    <Button
      onPress={() => navigation.navigate('DateSearch', { name: 'Date Search'})}
      title="Date Search"
    />

    <Home />

    <Button
      onPress={() => navigation.navigate('Results', { name: 'Results'})}
      title="See More"
    />

  </ScrollView>
);

export const StackNav = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  DateSearch: {
    screen: DateSearch,
  },
  Results: {
    screen: Results,
  },
});