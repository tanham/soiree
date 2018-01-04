import React from 'react';
import { Text} from 'react-native';
import Card from './Card';

const DateDetail = (props) => {
  return (
    <Card>
      <Text>{props.date.fields.Name}</Text>
    </Card>
  );
};

export default DateDetail;
