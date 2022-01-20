/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
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
    <View>
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
    <TouchableOpacity
          style={styles.button}
          // onPress={onPress}
          >
         <Text>Submit</Text>
         </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({

  container:
  {
    flex:1,
    alignItems:'center',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: '#FF7C03',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 15,
    height: 50,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
},
});
export default Login;
