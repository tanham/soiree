import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// parent component to wrap date search and results components
class Dates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      curatedSearch: true,
    };
  };

  componentWillMount() {
    if (this.curatedSearch == true) {
      axios.get('https://api.airtable.com/v0/appQOuPTL2lMDh87Y/Date%20Ideas?api_key=keyDbdvLevKL7L4oK')
      .then(response => this.setState({ dates: response.data.records}));
    }
  };

  // userSearch() {
  //   this.setState({
  //     curatedSearch: false,
  //   });
  // };
  //
  // loadResults(myResults) {
  //   this.setState({results: myResults})
  // };

  render() {
    return (
      <Text>Dates</Text>
    );
  };
}

export default Dates;
