import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

export default class DateSearch extends React.Component {
  render() {
    return (

      <View>
        <Header headerText={'Soiree'} />
        {this.props.children}
        <Text>Stuff</Text>
      </View>
    );
  }
}
