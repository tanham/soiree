import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Header from './src/components/header';
import PageHeader from './src/components/page_header';

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
