import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

// class DateDetail extends Component {
const DateDetail = (props) => {
  const { navigate } = props.navigation;

  return (
    <Card>
    <CardSection>
    <View style={styles.headerContentStyle}>
    <Text style={styles.headerTextStyle}>{props.date.fields.Name}</Text>
    <Text>Some location</Text>

    </View>
    </CardSection>
    <CardSection>
    <Image
    style={styles.imageStyle}
    source={{ uri : 'http://clipartix.com/wp-content/uploads/2016/04/Hearts-heart-clipart.png'}}
    />
    </CardSection>
    <CardSection>

    <View style={styles.anotherCustomButtonStyle}>
      <Button
      onPress={() => navigate('DateScreen', { name: 'Date'})}
      title='Click Me'
      color="#fff"
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
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  anotherCustomButtonStyle: {
    backgroundColor: '#B2DBBF',
    borderColor: '#B2DBBF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};


export default DateDetail;
