import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import DateDetail from './DateDetail';

class DatesList extends Component {
  // TODO: consider changing the name from dates to activities or outings

  // set initial state for component
  // this is called a class level property, can also use a constructor or setInitialState - same thing
  state = { dates: [] };

  componentWillMount() {
    // will automatically be executed when component is about to be rendered
    axios.get('https://api.airtable.com/v0/appQOuPTL2lMDh87Y/Date%20Ideas?api_key=keyDbdvLevKL7L4oK')
    // updates dates piece of state
    .then(response => this.setState({ dates: response.data.records}));
    // .then(response => console.log(response));
  }

  renderDates() {
    // react need a way to identify each child element to properly render, unique identifer as key, based on the content itself like a child element's id
    // wants to know which thing in the list to update
    return this.state.dates.map(date =>
      <DateDetail key={date.id} date={date} />
    );
  }

  render() {
    console.log(this.state.dates);
    return (
      <View>
          {this.renderDates()}
      </View>
    );
  }
}

export default DatesList;
