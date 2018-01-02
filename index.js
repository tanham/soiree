import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
// import App from './App';

const App = () => {
  return (
    <View>
      <Header headerText={'Soiree'} />
    </View>
  );
};

// render component to the device
AppRegistry.registerComponent('soiree', () => App);
