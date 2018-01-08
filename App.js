import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';

import Header from './src/components/Header';
import { Tabs } from './config/router';

class App extends Component {
  render() {
      return <Tabs /> ;
  }
}
export default App;
