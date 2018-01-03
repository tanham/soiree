import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Header from './src/components/Header';
import PageHeader from './src/components/PageHeader';
import DatesList from './src/components/DatesList';

const App = () => {

  return (
    <View>
      <Header headerText={'Soiree'} />

      // TODO: create a helper funtion to call in onPress
      <Button
        onPress={this.console.log("pressed the button")}
        title="Find Dates"
        color="#841584"
      />

      <PageHeader pageHeaderText={'Featured Dates'} />
      <DatesList />
    </View>
  );
};

export default App;
