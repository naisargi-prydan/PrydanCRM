/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React  from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Linking } from 'react-native';
import styles from './style';
import { useEffect } from 'react';



const Login = ({navigation}) => {
  //const [onChangeText, text] = React.useState('Useless Text');
  const [EmailAddress,setEmailAddress] = React.useState('');
  const [Password,setPassword] = React.useState('');
   
  const onLogin = () =>{
    console.log('Hello');
  };

  return ( 
    
    <View style={styles.container}>
      <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>
    <Input
      style = {styles.loginInput}
      placeholder="Email Address"
      setValue={setEmailAddress}
    />
    <Input
      style = {styles.loginInput}
      placeholder="Password"
      placeholderTextColor="#000"
      setValue={setPassword}
      secureTextEntry={true}
    />    
    
          
    <View style = {styles.loginview}>
    <TouchableOpacity 
      style={styles.loginbtn}
      onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* <Button style={styles.loginbtn} title="Login"
          onPress = {onLogin}  /> */}
    </View>   

   <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
    <Text style={{color: 'blue',marginTop:30}}>
     Forgot Password?
   </Text>
   </TouchableOpacity>

   <View style={styles.textview}>
   <Text style={styles.text}>Don't have an account? </Text>
   <TouchableOpacity >
             <Text   
             style={styles.link}
             onPress={() =>{navigation.navigate('ForgotPassword');
             }}>SignUp</Text>
           </TouchableOpacity>
   {/* <Text
    
      onPress={() => navigation.navigate('RegisterScreen')}>
      SignUp
    </Text> */}
    </View>

    </View>
    
    );
};

export default Login;
