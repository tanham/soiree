import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import DateSearch from './DateSearch';

class StatelessResults extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  };


  render() {
    return (
      <Text>Results Page</Text>

    );
  }
}

export default StatelessResults;
