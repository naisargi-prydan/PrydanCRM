/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
 import React from 'react';
 import {View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions} from 'react-native';
 import Input from '../../components/Input';
 import Button from '../../components/Button';
 import styles from './style';
 import { Linking } from 'react-native';




const Signup = ({navigation}) => {


  const {height} = useWindowDimensions();
  const [Username, setUserName] = React.useState('');
  const [Emailaddress, setEmailAddress] = React.useState('');
   return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.step}>Step 1 of 4</Text>
       <Image  style={styles.Img} source={require('../../assets/Images/logo.png')}/>
       <Text style={styles.text}>Create your account</Text>
        <Input
         style = {styles.signupInput}
         placeholder="Username"
         setValue={setUserName}
         secureTextEntry={false}
       />
        <Input
         style = {styles.signupInput}
         placeholder="Email address"
         setValue={setEmailAddress}
         secureTextEntry={true}
        />
        <View style = {styles.signUpbtn}>
        <Button title = "Next"
         onPress = {() => Linking.openURL('http://google.com')}
        />
        </View>

        <View style={styles.description1}>
        <Text style={styles.text1}>By creating CRM account, you're agreeing to accept the </Text>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
        <Text style={{color: '#215818',fontSize:11,marginHorizontal:1}}>
        Prydan terms of services
       </Text>
       </TouchableOpacity>
        </View>
                {/* <View style={styles.border}/> */}
        <View style = {styles.description2}>
        <Text style={styles.text2}>We're committed to your privacy.prydan will use the information you provide to contact you about our relevant content, product and services. You can unsubscribe from these communications at any time. For more information,Check out our </Text>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
        <Text style={{color: '#215818',fontSize:11, marginHorizontal:30}}>
         Privacy Policy.
        </Text>
       </TouchableOpacity>
        </View>
        <View style={styles.text3}>
         <Text style={{fontSize:16,color:'#000000',}}>Have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmail')}>
         <Text
             style={styles.link}>
             Login
         </Text>
         </TouchableOpacity>
         </View>
       </View>
       </ScrollView>
    );
 };
export default Signup;
