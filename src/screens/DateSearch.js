import React from 'react';
import { View, Text } from 'react-native';

export default class DateSearch extends React.Component {
  render() {
    return (
      <View style={{ padding: 100 }}>
        {this.props.children}
        <Text>Stuff</Text>
      </View>
    );
  }
}
