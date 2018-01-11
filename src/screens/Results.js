import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';

class Results extends Component {
  render() {
    return (
      <ScrollView>

        <Text>Results Page</Text>

        <DatesList />

      </ScrollView>

    );
  }
}

export default Results;
