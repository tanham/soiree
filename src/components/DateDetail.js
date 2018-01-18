import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

class DateDetail extends Component {

  render(props) {
    return (
      <Card>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.date.fields.Name}</Text>
            <Text>Some location</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri : 'http://clipartix.com/wp-content/uploads/2016/04/Hearts-heart-clipart.png'}}
          />
        </CardSection>
        <CardSection>
          <CustomButton onPress={() => console.log(props.date.fields.Name)}>
            Click Me
          </CustomButton>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  }
};


export default DateDetail;
