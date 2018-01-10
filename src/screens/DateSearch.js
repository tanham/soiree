import React from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import '../global'

export default class DateSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null
    };
    this.submitFormData = this.submitFormData.bind(this);
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(`lat: ${location.coords.latitude}`);
    console.log(`lng: ${location.coords.longitude}`);
  };

  submitFormData() {
    let url = `${placesSearchBaseURL}${this.state.location.coords.latitude},${this.state.location.coords.longitude}&radius=500&key=${GOOGLE_API_KEY}`;
    // will automatically be executed when component is about to be rendered
    console.log(url);
    axios.get(url)
    // updates dates piece of state
    // .then(response => this.setState({ dates: response.data.records}));
    .then(response => console.log(response));
    console.log('pressed the button');
  };

  dummyfunction() {
    // can use for autocomplete
    console.log('being called on change text');
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      console.log(text);
    }

    return (
      <View>
      <Header headerText={'Soiree'} />
      {this.props.children}
      <FormLabel>Where You At?</FormLabel>
      <FormInput onChangeText={this.dummyfunction}/>
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>

      <Button
      onPress={this.submitFormData}
      title='Submit'
      />

      </View>
    );
  }
}
