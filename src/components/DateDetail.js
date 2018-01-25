import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';


const DateDetail = (props) => {
  const { navigate } = props.navigation;

  return (
    <Card>
    <CardSection>
    <View style={styles.headerContentStyle}>
    <Text style={styles.headerTextStyle}>{props.date.fields.Name}</Text>

    </View>
    </CardSection>
    <CardSection>

    <View style={styles.anotherCustomButtonStyle}>
      <Button
      onPress={() => navigate('DateScreen', { name: 'Date'})}
      title='Click Me'
      color="#030202"
      />
    </View>

    </CardSection>

    </Card>
  );
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#030202'
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  anotherCustomButtonStyle: {
    backgroundColor: '#FF1053',
    borderColor: '#FF1053',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};


export default DateDetail;
