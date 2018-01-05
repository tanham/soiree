import React from 'react';
import { View } from 'react-native';

export default class SamplePage extends React.Component {
  render() {
    return (
      <View style={{ padding: 100 }}>
        {this.props.children}
      </View>
    );
  }
}
