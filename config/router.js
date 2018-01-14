import React from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import CuratedResults from '../src/screens/CuratedResults';
import DateSearch from '../src/screens/DateSearch';
import Header from '../src/components/Header';


const MyHomeScreen = ({ navigation }) => (
  debugger;
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

const DateSearchScreen = ({ navigation }, props) => (
  <Text>WHERE YOU AT?</Text>

  <Button
  onPress={() => navigation.navigate('StatelessResults', { name: 'StatelessResults'})}
  title='Use Device Location'
  />
);

const ResultsScreen = ({ navigation }) => (
  </DateSearch>
);

export const StackNav = StackNavigator({
  debugger;
  Home: {
    screen: MyHomeScreen,
    navigationOptions: {
      title: 'Soirée',
    }
  },
  DateSearch: {
    screen: DateSearchScreen,
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
  StatelessResults: {
    screen: ResultsScreen,
    navigationOptions: {
      title: 'Results',
    }
  }
});
