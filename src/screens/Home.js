import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';
import CustomButton from '../components/CustomButton';
import CardSection from '../components/Card';
import DateDetail from '../components/DateDetail';

class Home extends Component {
  render() {

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.homeLayoutStyle}>

      <CustomButton
        style={{height: 58, backgroundColor: '#B2DBBF', borderColor: '#0072BB', borderWidth: 0, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, }}
        onPress={() => navigate('DateSearch', { name: 'Date Search'})}
        >
        <Text style={{color: '#fff', fontSize: 24}}>
          Create Your Own Experience
        </Text>
      </CustomButton>

      <View style={styles.buttonLayoutStlye}>
      <View style={{flexDirection: 'row', }}>
      <CustomButton style={styles.customButtonStyle}>
      <Text
        onPress={() => navigate('CuratedResults', { name: 'Dates'})}
        style={styles.buttonTextStyle}>
      Eats
      </Text>
      </CustomButton>

      <CustomButton style={styles.customButtonStyle}>
      <Text
        onPress={() => navigate('CuratedResults', { name: 'Dates'})}
        style={styles.buttonTextStyle}>
      Active
      </Text>
      </CustomButton>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10 }}>
      <CustomButton style={styles.customButtonStyle}>
      <Text
      onPress={() => navigate('CuratedResults', { name: 'Dates'})}
      style={styles.buttonTextStyle}>
      Live
      </Text>
      </CustomButton>

      <CustomButton style={styles.customButtonStyle}>
      <Text
      onPress={() => navigate('CuratedResults', { name: 'Dates'})}
      style={styles.buttonTextStyle}>
      Random
      </Text>
      </CustomButton>
      </View>

      </View>

      </ScrollView>

    );
  }
}

const styles = {
  homeLayoutStyle: {
    alignSelf: 'center',
    paddingTop: 20,
    backgroundColor: '#B2DBBF'
  },
  buttonLayoutStlye: {
      marginTop: 30,
  },
  customButtonStyle: {
    width: 150,
    height: 150,
    backgroundColor: '#B2DBBF',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 100,
    color: '#fff'
  }
};

export default Home;
