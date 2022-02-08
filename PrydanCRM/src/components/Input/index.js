/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';

const Input = ({setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>
    <TextInput
    OnChangeText={setValue}
    placeholder={placeholder}
    placeholderTextColor='#808080'
    style = {styles.input}
    secureTextEntry={secureTextEntry}
    />
   </View>

 );
};
export default Input;
