import React from 'react';
import { AppRegistry, View, Button } from 'react-native';
import Header from './src/components/header';

// import App from './App';

const App = () => {
  return (
    <View>
      <Header headerText={'Soiree'} />

      <Button
        onPress={console.log("pressed the button")}
        title="Find Dates"
        color="#841584"
      />

    </View>
  );
};

// render component to the device
AppRegistry.registerComponent('soiree', () => App);
