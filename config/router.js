import React from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../src/screens/Home';
import CuratedResults from '../src/screens/CuratedResults';
import DateSearch from '../src/screens/DateSearch';
import Header from '../src/components/Header';
import StatelessResults from '../src/screens/StatelessResults';
import Dates from '../src/components/Dates';
import CustomButton from '../src/components/CustomButton';

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

const MyResults = (props) => (
  <ScrollView>
  <Text>Results Page</Text>
  <DateSearch />
  </ScrollView>
);

const DateSearchScreen = ({ navigation }, {makeApiRequest}) => (
  <View>
  <Text>
    WHERE YOU AT?
  </Text>

  <Button
  onPress={() => navigation.navigate('StatelessResults', { name: 'Results'})}
  title='Use Device Location'
  />

  <CustomButton onPress={()=> console.log('pressed the custom button')}>
    Custom Button
  </CustomButton>

  </View>
);

export const StackNav = StackNavigator({
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
    screen: MyResults,
    navigationOptions: {
      title: 'Results',
    }
  }
});
