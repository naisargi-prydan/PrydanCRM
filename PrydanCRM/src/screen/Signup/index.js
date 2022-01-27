/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet,TextInput} from 'react-native';
//import style from '../../components/Input/style';


const Signup = () => {
  const[onChangeText,text] = React.useState('Useless Text');
  return (
      <View style={style.container}>
      <Image  style={style.Img} source={require('../../assets/Images/logo.png')}/>
      <TextInput 
        style={style.input}
        onChangeText={onChangeText}
        value={text}
        placeHolder="First Name"
        />
        <TextInput
          style={style.input}
          onChangText={onChangeText}
          value={text}
          placeHolder="LastName"
        />
        <TextInput
          style={style.input}
          onChangText={onChangeText}
          value={text}
          placeHolder="LastName"
        />
      </View>
    );
};
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backGroundColor:'#ffffff',
  },
  Img:{
    marginTop:50,
    marginBottom:20,
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

})


export default Signup;
