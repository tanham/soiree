import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import '../global';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

const SingleDateDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Text>
          rendering single date detail component
        
          {console.log(props)}
          </Text>
        </View>
      </CardSection>
    </Card>
  );
};

export default class SingleDateRequest extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props);
    return (
      <SingleDateDetail  />
    );
  };
}
