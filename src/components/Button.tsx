import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Styles } from '../styles/index';

// Prop Types
interface Props {
  color: string,
  onPress: any,
  text: string
}

// Primary Button
const Button = (props: Props) => {
  return (
    <TouchableHighlight underlayColor={props.color} onPress={props.onPress}>
      <Text style={Styles.button}>{props.text}</Text>
    </TouchableHighlight>
  )
}

export default Button;
