import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';
import CustomButton from '../components/CustomButton';
import CardSection from '../components/Card';

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
