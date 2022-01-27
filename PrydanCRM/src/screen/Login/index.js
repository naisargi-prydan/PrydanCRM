/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Linking } from 'react-native';


const Login = (navigation) => {
  const [onChangeText, text] = React.useState('Useless Text');
  return ( 
    <View style={styles.container}>
      <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>

    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Email address"
  />
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={text}
    placeholder="Password"
    secureTextEntry={true}
    />
   <Button/>
   <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
    <Text style={{color: 'blue'}}>
     Forgot Password?
   </Text>
   </TouchableOpacity>
   <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
             Don't have an account?SignUp
            </Text>

   {/* <Text style={styles.text}>or</Text>
   <Text>Don't have an account?</Text>
   <TouchableOpacity>
             <Text onPress={() =>{
               navigation.navigate('Signup');
             }}>SignUp</Text>
           </TouchableOpacity> */}
    </View>
    );
};

const styles = StyleSheet.create({

  container:
  {
    flex:1,
    alignItems:'center', 
    backgroundColor:'#ffffff',   
    // marginTop:25,
  },
  Img:{
    // height: 200,
    // width: 250,
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width:300,
    borderWidth: 1,
    borderColor: '#ADADAD',
    textAlign:'center',      
    fontSize:18,
    paddingVertical:10,
    paddingHorizontal: 10,
    marginTop:20,
    marginBottom:15,   
  },
  text:{
    borderColor:'#CBD4E6',
    

  },
  registerTextStyle: {
    color: '#ADADAD',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },


});
export default Login;
