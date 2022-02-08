/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from '..';
import Input from '../../components/Input';
import styles from './style';

const ForgotPassword = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>
            <Text style={styles.heading}>Reset your password</Text>
            <Text style={styles.description}>Please enter the email address you'd like your password reset information sent to.</Text>
        <Input>

        </Input>
        <Button/>
        <View>
        <Text>Go back to </Text>
        <TouchableOpacity>
            <Text>prydan.com/login</Text>
        </TouchableOpacity>
        </View>
        <Text>2022 prydan, INC. All Rights Reserved.</Text>
        <TouchableOpacity>
        <Text>Privacy Policy</Text>
        </TouchableOpacity>
        </SafeAreaView>

    );
};
export default ForgotPassword;
