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
import PageHeader from './src/components/PageHeader';
import DatesList from './src/components/DatesList';
import SamplePage from './src/components/SamplePage';

class App extends Component {
  state = { page:1 };

  handleButtonPress() {
    console.log(this);
    this.setState({ page: 2 });
  }

  render() {
    return (
      <ScrollView>
      {this.state.page === 1 &&
        <View>
          <Header headerText={'Soiree'} />

          <Button
          // TODO: create a helper funtion to call in onPress

          onPress={this.handleButtonPress.bind(this)}
          title="Find Dates"
          color="#841584"
          />

          <PageHeader pageHeaderText={'Featured Dates'} />
          <PageHeader pageHeaderText={'...loading from dummy API'} />

          <DatesList />
        </View>
      }
      {this.state.page === 2 &&

        <SamplePage>
          <Text>Sample Page Content</Text>
        </SamplePage>
      }
      </ScrollView>
    );
  }
}

export default App;
