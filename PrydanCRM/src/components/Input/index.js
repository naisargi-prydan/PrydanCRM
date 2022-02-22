/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import style from './style';

const input = ({onChangeText, styles, value, label, input, text}) => {
  return (
 <View style={styles.container}>
     <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
       />
       <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
         />
  </View>
 );
};
export default input;
