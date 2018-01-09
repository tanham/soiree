import React from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';

export default class DateSearch extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };
  componentWillMount() {
    this._getLocationAsync();
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
  };
  someFunction() {
    console.log('doing the form thing');
  };
  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
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
