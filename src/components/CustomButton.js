import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ( {onPress, style, children} ) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, style]}>
      {children}
      </Text>
    </TouchableOpacity>

  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export default CustomButton;
