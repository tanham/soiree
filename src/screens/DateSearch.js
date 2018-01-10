import React from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import '../global'

export default class DateSearch extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

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
  // TODO: use rn primative that will mount component after get _getLocationAsync
  componentWillMount() {
    this._getLocationAsync();

    let url = `${placesSearchBaseURL} ${location.coords.latitude},${location.coords.longitude} '&radius=500&key='${GOOGLE_API_KEY}`;
    // will automatically be executed when component is about to be rendered
    console.log(url);
    axios.get(url)

    // updates dates piece of state
    // .then(response => this.setState({ dates: response.data.records}));
    .then(response => console.log(response));
  };

  someFunction() {
    console.log('form thing');
  };
  render() {

    return (
      <View>
        <Header headerText={'Soiree'} />
        {this.props.children}
        <FormLabel>Where You At?</FormLabel>
        <FormInput onChangeText={this.someFunction}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>

        <Button
        onPress={this.someFunction}
        title="Submit"
        />

      </View>
    );
  }
}
