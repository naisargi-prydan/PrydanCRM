/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput} from 'react-native';
import style from './style';

const input = ({onChangeText, styles, value, label, input}) => {
  return (
    <View>
    {label && <Text>{label}</Text>}
     <TextInput
       style={[styles.input, style]}
       onChangeText={onChangeText}
       value={value}
    />
    </View>
 );
};

export default input;
