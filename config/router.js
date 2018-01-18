import React from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../src/screens/Home';
import CuratedResults from '../src/screens/CuratedResults';
import DateSearch from '../src/screens/DateSearch';
import StatelessResults from '../src/screens/StatelessResults';
import CustomButton from '../src/components/CustomButton';

const DateSearchScreen = ({ navigation }) => (
  <View>
  <Text>
    WHERE YOU AT?
  </Text>

  <Button
  onPress={() => navigation.navigate('StatelessResults', { name: 'Results'})}
  title='Use Device Location'
  />

  </View>
);

const DateScreen = ({ navigation }) => (
  <Text>
    the date
  </Text>
);

export const StackNav = StackNavigator({
  Home: {
    screen: Home,
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
  StatelessResults: {
    screen: DateSearch,
    navigationOptions: {
      title: 'Results',
    }
  },
  DateScreen: {
    screen: DateScreen,
    navigationOptions: {
      title: 'Date',
    }
  }
});
