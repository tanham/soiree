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
    this.setState({ page: 2 });
  }

  backButtonPress() {
    this.setState({ page: 1 });
  }

  render() {
    return (
      <ScrollView>
      {this.state.page === 1 &&
        <View>
          <Header headerText={'Soiree'} />

          <Button
          onPress={this.handleButtonPress.bind(this)}
          title="Find Dates"
          color="#841584"
          />

          <PageHeader pageHeaderText={'Featured Dates'} />
          <PageHeader pageHeaderText={'...loading from dummy API'} />

          <DatesList />

          <Button
          onPress={this.backButtonPress.bind(this)}
          title="See more"
          color="#841584"
          />
        </View>
      }
      {this.state.page === 2 &&

        <SamplePage>
          <Button
          onPress={this.backButtonPress.bind(this)}
          title="Go Back"
          color="#841584"
          />
          <Text>Sample Page Content</Text>
        </SamplePage>
      }
      </ScrollView>
    );
  }
}

export default App;
