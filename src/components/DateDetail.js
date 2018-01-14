import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const DateDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text onPress={console.log(props)}>{props.date.fields.Name}</Text>
          <Text>Some location</Text>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};


export default DateDetail;
