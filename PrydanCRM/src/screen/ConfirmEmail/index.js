/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import style from './style'; 

const ConfirmEmail = ({navigation}) => {
    return (
        <SafeAreaView style = {style.container}>
        <Text style={style.step}>Step 2 of 4</Text>
        <Text style = {style.heading}>Hi Naisargi Trivedi, please confirm your email</Text>
        <Image style = {style.Img}source={require('../../assets/Images/logo.png')}/>
        <Text style={style.emailtext}>We've sent an email to</Text>
        <Text style={style.email}>naisargi.prydan@gmail.com</Text>
        <Text style={style.description}>Click the link in the email to conform your address and start growing with Prydan today</Text>
       
        <TouchableOpacity style={style.emailbtn}>
          <Text style={style.emailbtntext}>Open your email</Text>
        </TouchableOpacity>

        <Text style={style.text}>Can't see the email?</Text>
        <View style={{flexDirection:'row',marginTop:10,marginBottom:20}}>
          <Text style={style.text1}>Check your spam folder or </Text>
          <TouchableOpacity>
            <Text style={style.link}> Resend email</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.text2}>Your information is safe secure in Prydan</Text>
        </SafeAreaView>
    );
};
export default ConfirmEmail;




