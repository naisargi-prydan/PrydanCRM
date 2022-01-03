/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
// import Input from '../../components/Input';

const Login = () => {
  const [value, onChangeText, text] = React.useState("Useless Text");
  return (
    // <View>
    // <Text>Login</Text>
    // </View>
    // <Input
    //    label="Username"
    //    onChangeText={(text) =>  onChangeText(text)}
    //    value={value}
    // />
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
  />
);
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Login;
