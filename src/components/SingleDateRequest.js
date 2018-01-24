import React from 'react';
import { View, ScrollView, Text, Linking } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import '../global';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

export default class SingleDateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
    console.log(placeid);
    this.renderDate = this.renderDate.bind(this);
  };

  componentWillMount() {
    let url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_API_KEY}`;
    axios.get(url)
    .then(response => this.setState({
      date: response.data.result,
      name: response.data.result.name,
      address: response.data.result.formatted_address,
      phoneNumber: response.data.result.formatted_phone_number,
      rating: response.data.result.rating,
      website: response.data.result.website,
      maps: response.data.result.url
    }));
  };

  renderDate() {
    return `Date:${this.state.name} Address:${this.state.address} Number:${this.state.phoneNumber} Raiting:${this.state.rating} Website:${this.state.website} `

  };

  render() {
    return (
      <ScrollView>

        <Card>
          <CardSection>
            <View style={{flexDirection: 'column',
              justifyContent: 'space-around',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <Text style={{
                fontSize: 20,
                color: '#030202'}}>
                {this.state.name}</Text>
              <Text  onPress={() => Linking.openURL(`${this.state.maps}`)}>
                {this.state.address}
                </Text>
            </View>
          </CardSection>
          <CardSection>
            <Text>
              Rating: {this.state.rating}
            </Text>
          </CardSection>
          <CardSection>
            <Text
              style={{color: '#0000ee'}}
              onPress={() => Linking.openURL(`${this.state.website}`)}>
              {this.state.website}
            </Text>
          </CardSection>
        </Card>
      </ScrollView>

    );
  };
}
