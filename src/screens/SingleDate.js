import React from 'react';
import { Text, View, Button } from 'react-native';

const SingleDate = (props) => {
  // const { navigate } = props.navigation;
  return (
    <View>
    <Text>
      the date child
    </Text>

    <Button
    onPress={console.log(this.props)}
    title='console test'
    />
    </View>


  );
};

export default SingleDate;
