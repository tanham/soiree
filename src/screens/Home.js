import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <DatesList />
      </ScrollView>
    );
  }
}

export default Home;
