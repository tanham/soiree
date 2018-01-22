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
    this.state = {
      date: null
    }
    console.log(placeid);
  };

  componentWillMount() {
    let url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_API_KEY}`;
    axios.get(url)
    .then(response => this.setState({ date: response.data.result}));
  };


  renderDate() {
    const dateDetails = JSON.stringify(this.state.date);
    return dateDetails;
  };

  render() {
    return (
      <ScrollView>
      <SingleDateDetail />
      <Text>
        {this.renderDate()}
      </Text>
      </ScrollView>

    );
  };
}
