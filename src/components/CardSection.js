import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#e8e8e8',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#e8e8e8',
    position: 'relative'
  }
};

export default CardSection;
