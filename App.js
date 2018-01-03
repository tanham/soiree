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

const App = () => {

  return (
    <View>
      <Header headerText={'Soiree'} />

      <Button
        onPress={this.console.log("pressed the button")}
        title="Find Dates"
        color="#841584"
      />

      <PageHeader pageHeaderText={'Featured Dates'} />

    </View>
  );
};

export default App;
