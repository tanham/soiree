import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  ScrollView,
  Button
} from 'react-native';

import Header from './src/components/Header';
import PageHeader from './src/components/PageHeader';
import DatesList from './src/components/DatesList';

const App = () => {

  return (
    // <View>
    // {this.state.page === 1 &&
    //   <View>
    //     <Header headerText={'Soiree'} />
    <ScrollView>
      {this.state.page === 1 &&
        <Header headerText={'Soiree'} />

        <Button
          // TODO: create a helper funtion to call in onPress

          onPress={this.console.log("pressed the button")}
          title="Find Dates"
          color="#841584"
        />

        <PageHeader pageHeaderText={'Featured Dates'} />
        <DatesList />
      </ScrollView>
    );
  };

export default App;
