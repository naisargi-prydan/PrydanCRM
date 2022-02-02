/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        // value={value}
        OnChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  // backgroundColor: 'white',
  },
  input: {
    height: 50,
    width:290,
    borderWidth: 2,
    borderRadius:2,
    borderColor: '#ADADAD',
    textAlign:'center',
    fontSize:18,
    paddingVertical:10,
    paddingHorizontal: 10,
    marginTop:10,
    marginBottom:7,
  },
});

export default CustomInput;
