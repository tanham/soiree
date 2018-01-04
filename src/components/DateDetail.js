import React from 'react';
import { Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const DateDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.date.fields.Name}</Text>
      </CardSection>
      
    </Card>
  );
};

export default DateDetail;
