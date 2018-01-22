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
    this.state = {
      date: null
    }
  };

  componentWillMount() {
    axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJq_x-rcdqkFQRvZG5CzgtCvU&key=AIzaSyDDVF13v_iX0m-03WeYMn-lJoLn3vmbC04')
    .then(response => this.setState({ date: response.data.result}));
  };

  renderDate() {
    const theDate = JSON.stringify(this.state.date);
    return theDate;
  };

  render() {
    console.log(this.props);
    return (
      <ScrollView>
      <Text>
        {this.renderDate()}
      </Text>
      </ScrollView>

    );
  };
}
