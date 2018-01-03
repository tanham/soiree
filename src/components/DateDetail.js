import React from 'react';
import { Text, View } from 'react-native';

const DateDetail = (props) => {
  return (
    <View>
      <Text>{props.date.fields.Name}</Text>
    </View>
  );
};

export default DateDetail;
