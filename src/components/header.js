import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View>
      <Text>{props.headerText}</Text>
    </View>
  );
};

export default Header;
