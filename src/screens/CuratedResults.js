import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';

class CuratedResults extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#B2DBBF'}}>

        <Text style={styles.textStyle}>Results Page</Text>

        <DatesList navigation={this.props.navigation}/>

      </ScrollView>

    );
  }
}

const styles = {
  textStyle: {
    fontFamily: 'GillSans-BoldItalic',
    fontSize: 34,
    alignSelf: 'center',
    color: '#fff'
  }
};

export default CuratedResults;
