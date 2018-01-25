import React, { Component } from 'react';
import { ScrollView, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';
import CustomButton from '../components/CustomButton';
import CardSection from '../components/Card';
import DateDetail from '../components/DateDetail';

class Home extends Component {

  render() {

    const { navigate } = this.props.navigation;
    const remote = 'http://www.tasteinsf.com/public/images/default-restaurant-thumbnail-250x244.png';
    return (
      <ScrollView style={styles.homeLayoutStyle}>

        <View style={styles.buttonContainerStyle}>
          <Button
          onPress={() => navigate('DateSearch', { name: 'Date Search'})}
          title='Create Your Own Experience'
          color="#fff"
          />
        </View>


        <View style={styles.buttonLayoutStlye}>
          <View style={{flexDirection: 'row', }}>

            <View style={{width: 150,
            height: 150,
            backgroundColor: '#FF1053',
            borderColor: '#FF1053',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Dine'
              color="#030202"
              />
            </View>
            <View style={{width: 150,
            height: 150,
            backgroundColor: '#731DD8',
            borderColor: '#731DD8',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Active'
              color="#030202"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', }}>

            <View style={{width: 150,
            height: 150,
            backgroundColor: '#66C7F4',
            borderColor: '#66C7F4',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Learn'
              color="#030202"
              />
            </View>

            <View style={{width: 150,
            height: 150,
            backgroundColor: '#48A9A6',
            borderColor: '#48A9A6',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Live'
              color="#030202"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', }}>

            <View style={{width: 150,
            height: 150,
            backgroundColor: '#F8F32B',
            borderColor: '#F8F32B',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Fun'
              color="#030202"
              />
            </View>

            <View style={{width: 150,
            height: 150,
            backgroundColor: '#C1666B',
            borderColor: '#C1666B',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Button
              onPress={() => navigate('CuratedResults', { name: 'Dates'})}
              title='Random'
              color="#030202"
              />
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = {
  homeLayoutStyle: {
    backgroundColor: '#FFF4E9'
  },
  buttonLayoutStlye: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  customButtonStyle: {
    width: 150,
    height: 150,
    backgroundColor: '#B2DBBF',
    borderColor: '#B2DBBF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  buttonContainerStyle: {
    backgroundColor: '#030202',
    borderColor: '#000',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    height: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anotherCustomButtonStyle: {
    width: 150,
    height: 150,
    backgroundColor: '#B2DBBF',
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 100,
    color: '#fff'
  },
};

export default Home;
