import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';

class CuratedResults extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#e8e8e8'}}>

        <Text style={styles.textStyle}>Results Page</Text>

        <DatesList navigation={this.props.navigation}/>

      </ScrollView>

    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#030202'
  }
};

export default CuratedResults;
