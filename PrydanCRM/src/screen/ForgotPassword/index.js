/* eslint-disable prettier/prettier */

import React from 'react';
import {Text, View, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from '..';
import Input from '../../components/Input';
import style from './style';
import styles from './style';

const ForgotPassword = ({navigation}) => {

    const [setEmailAddress, EmailAddress] = React.useState('');
  
    return (
        <SafeAreaView style={styles.container}>
        <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>
            <Text style={styles.heading}>Reset your password</Text>
            <Text style={styles.description}>Please enter the email address you'd like your password reset information sent to.</Text>
        <Input
        style={styles.fpinput}
        placeholder="Email address"
        setValue={setEmailAddress}
        />
        
        <TouchableOpacity style={styles.btnresetpassword}>
        <Button title = "Reset your password"  />
        </TouchableOpacity>
        
        <View style={styles.linktext}>
        <Text style = {styles.description}>Go back to</Text>
        <TouchableOpacity>
            <Text style = {styles.link}>prydan.com/login</Text>
        </TouchableOpacity>
        </View>

        <Text style={style.text}>2022 prydan, INC. All Rights Reserved.</Text>
        <TouchableOpacity>
        <Text style={style.link2}>Privacy Policy</Text>
        </TouchableOpacity>
        </SafeAreaView>

    );
};
export default ForgotPassword;
