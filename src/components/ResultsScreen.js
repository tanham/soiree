import React from 'react';
import { View, ScrollView } from 'react-native';
import DatesList from './DatesList';

class ResultsScreen extends Component {
  state = { page:4 };

  render() {
    return (
      <ScrollView>
        <DatesList />
      </ScrollView>
    );
  }
}

export default ResultsScreen;
