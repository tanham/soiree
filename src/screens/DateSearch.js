import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/Header';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class DateSearch extends React.Component {
  someFunction() {
    console.log('doing the form thing');
  };
  render() {

    return (

      <View>
        <Header headerText={'Soiree'} />
        {this.props.children}
        <FormLabel>Where You At?</FormLabel>
        <FormInput onChangeText={this.someFunction}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>

        <Button
          onPress={this.someFunction}
          title="Submit"
        />
      </View>
    );
  }
}
