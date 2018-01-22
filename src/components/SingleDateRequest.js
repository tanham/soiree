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
    <ScrollView style={{backgroundColor: '#B2DBBF'}}>
      <Card>
        <CardSection>
          <View>
            <Text style={{ color: '#fff'}}>
            rendering single date detail component
            {console.log(props)}
            </Text>
          </View>
        </CardSection>
      </Card>
    </ScrollView>

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
