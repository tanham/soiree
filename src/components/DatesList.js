import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class DatesList extends Component {
  // set initial state for component
  // this is called a class level property, can also use a constructor or setInitialState - same thing
  state = { dates: [] };

  componentWillMount() {
    // will automatically be executed when component is about to be rendered
    // console.log('in lifecycle method');
    axios.get('https://api.airtable.com/v0/appQOuPTL2lMDh87Y/Date%20Ideas?api_key=keyDbdvLevKL7L4oK')
    // .then(response => this.setState({ dates: response.data}));
    .then(response => console.log(response));
  }

  render() {
    return (
      <View>
          <Text>Dates List!!!</Text>
      </View>
    );
  }
}

export default DatesList;
