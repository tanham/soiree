import React from 'react';
import { View, Text, Button, Platform, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage, SearchBar, Icon } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import '../global';

const DateDetail = (props) => {
  return (
    <View>
      <Text>{props.date.name}</Text>
    </View>
  );
};

export default class DateSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null,
      dates: []
    };
    this.makeApiRequest = this.makeApiRequest.bind(this);
    this.renderDates = this.renderDates.bind(this);
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
    console.log(`lat: ${location.coords.latitude},lng: ${location.coords.longitude}`);
  };

  makeApiRequest() {
    let url = `${placesSearchBaseURL}${this.state.location.coords.latitude},${this.state.location.coords.longitude}&radius=500&key=${GOOGLE_API_KEY}`;
    // will automatically be executed when component is about to be rendered
    axios.get(url)
    // updates dates piece of state
    .then(response => this.setState({ dates: response.data.results }));
    // .then(response => console.log(response));
    // console.log('pressed the button');
  };

  renderDates() {
    let renderedDates = this.state.dates.map(date =>
      <DateDetail key={date.id} date={date} />
    );
    return renderedDates;
  }

  dummyfunction() {
    // can use for autocomplete
    console.log('being called on change text');
  };

  render() {
    return (
      <View>

        {/*{this.props.children}*/}

        {// location input form
          /*<FormLabel>Where You At?</FormLabel>
        <View></View>
        <FormInput onChangeText={this.dummyfunction}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        */}

        <Text style={styles.paragraph}>
          WHERE YOU AT?
        </Text>

        <Button
        onPress={this.makeApiRequest}
        title='Use Device Location'
        />

        <View>
          {this.renderDates()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    textAlign: 'center',
  },
});
