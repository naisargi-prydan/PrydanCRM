/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {Text, View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Linking } from 'react-native';
import style from '../../components/Button/style';


const Login = (navigation) => {
  const [onChangeText, text] = React.useState('Useless Text');
  const [username , setUsername] = useState('');  
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
    <View style={styles.loginbtn}>
      <Button buttonTitle = "Login"/>
    </View>
   <Text style={{}}>or</Text>
   <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
    <Text style={{color: 'blue',margin:10,}}>
     Forgot Password?
   </Text>
   </TouchableOpacity>  
   <View style={style.description}>
        <Text> Have an account ? </Text>
        <Text style={style.link}
           onPress={() => navigation.navigate('Signup')}>
            Sign up
        </Text>
        </View>
    
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
    backGroundColor:'#ffffff',    
    fontSize:18,
    paddingVertical:10,
    paddingHorizontal: 10,
    marginTop:20,
    marginBottom: 10,   
  },
  text:{
    borderColor:'#CBD4E6',
    },  
  loginbtn:{
    marginTop:10,
    marginBottom:20,
  },
  description:{
    justifyContent:'center',
    flexDirection:'row',
  },

});
export default Login;
