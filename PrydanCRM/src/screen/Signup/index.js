/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Text, Image, StyleSheet,TextInput} from 'react-native';
//import style from '../../components/Input/style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signup = (navigation) => {
  const[onChangeText,text] = React.useState('Useless Text');
  const [ Username, setUsername ]= React.useState('');
  const [Emailaddress, setEmailaddress]= React.useState('');
  return (
      <View style={style.container}>
      <Image  style={style.Img} source={require('../../assets/Images/logo.png')}/>
      <Text style={style.heading}>Create your free account</Text>
     <Input
      placeholder="Username"
      setValue={setUsername}/> 
      <Input
      placeholder="Email address"
      setValue={setEmailaddress}/>
        <View style={style.signupbtn}>
         <Button buttonTitle="Next"/>
        </View>
       
        <View style={style.a}>
          <Text>By creating account, you're agreeing to accept the </Text>
          <Text style={style.link}
          onPress={()=> navigation.navigate('Login')}>Prydan terms of services.</Text>
        </View>
        <View style={style.b}>
          <Text>We're committed to your privacy.Prydan will use the information you provide to contact you bout our relevant content,products and service. You can unsubscribe from these communications at any time. For more information, check out our </Text>
          <Text style={style.link}
          onPress={()=> navigation.navigate('Login')}>Privacy Policy</Text>
        </View>
        <View style={style.text1}>
        <Text> Have an account ? </Text>
        <Text style={style.link}
           onPress={() => navigation.navigate('Login')}>
            Sign in
        </Text>
        </View>
      </View>
    );
};
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backGroundColor:'#ADADAD',
  },
  Img:{
    marginTop:50,
    marginBottom:20,
  },
  heading:{
    fontSize:15,
    fontWeight:'bold',
  },
  text:{
    borderColor:'#CBD4E6',
  },
  signupbtn:{
     //  marginHorizontal: ,
       //marginVertical: ,
      // borderWidth:2,
      marginBottom:15,
  },
  text1:{
    marginTop:70,
    justifyContent:'space-between',
    flexDirection:'row',
    color:'black',
  },
  link:{
   color:'blue',
  },
  a:{
    marginTop:20,
    marginBottom:20,
    marginHorizontal:20,
   // flexDirection:
  },
  b:{
    marginTop:20,
    marginBottom:20,
    marginHorizontal:20,
    justifyContent:'center',
    
   
  },

});
export default Signup;
