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

    <CustomButton
      onPress={() => navigation.navigate('DateSearch', { name: 'Date Search'})}
      >
      Create Your Own Experience!
    </CustomButton>

    <View style={{flexDirection: 'row', }}>
    <CustomButton style={{width: 160, height: 160 }}>
    <Text style={{textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginTop: 100,
                  }}>
    Eats
    </Text>
    </CustomButton>

    <CustomButton style={{width: 160, height: 160 }}>
    <Text style={{textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginTop: 100,
                  }}>
    Active
    </Text>
    </CustomButton>
    </View>

    <View style={{flexDirection: 'row', }}>
    <CustomButton style={{width: 160, height: 160 }}>
    <Text style={{textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginTop: 100,
                  }}>
    Live
    </Text>
    </CustomButton>

    <CustomButton style={{width: 160, height: 160 }}>
    <Text style={{textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginTop: 100,
                  }}>
    Random
    </Text>
    </CustomButton>
    </View>


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
