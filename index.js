import React from 'react';
import { AppRegistry, View, Button } from 'react-native';
import Header from './src/components/Header';
import PageHeader from './src/components/PageHeader';

import App from './App';
import 'expo';

// render App.js to the device
AppRegistry.registerComponent('soiree', () => App);
AppRegistry.registerComponent('main', () => App);
