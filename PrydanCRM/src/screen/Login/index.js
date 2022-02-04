/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Linking } from 'react-native';
import styles from './style';


const Login = (navigation) => {
  //const [onChangeText, text] = React.useState('Useless Text');
  const [EmailAddress,setEmailAddress] = React.useState('');
  const [Password,setPassword] = React.useState('');
  return ( 
    <View style={styles.container}>
      <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>
    <Input
      style = {styles.loginInput}
      placeholder="Email Address"
      setValue={setEmailAddress}
      secureTextEntry={true}
    />
    <Input
      style = {styles.loginInput}
      placeholder="Password"
      setValue={setPassword}
      secureTextEntry={true}
    />    
    <View style={styles.loginbtn}>
      <Button text="Login" />
    </View>   

   <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
    <Text style={{color: 'blue',marginTop:30}}>
     Forgot Password?
   </Text>
   </TouchableOpacity>

   <View style={styles.text}>
   <Text>Don't have an account? </Text>
   <Text
      style={styles.link}
      onPress={() => navigation.navigate('RegisterScreen')}>
      SignUp
    </Text>
    </View>

    </View>
    );
};

export default Login;
