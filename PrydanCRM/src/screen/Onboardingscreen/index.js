/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity,} from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';
// import Spacer from 'react-native-spacer';
import styles from './style';


const Onboarding = ({navigation}) =>{
  return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
        <Image source={require('../../assets/Images/logo.png')}/>
       {/* <Spacer spaceMargin={20}/> */}
          <Text style={styles.title}>Prydan Growth Stock</Text>
          <Text style={styles.description}> Powerful alone.Even together. Businesses grow faster when they have a complete Growth Stack for marketing, sales, and CRM from prydan.</Text>
          <Text style={styles.subtitle}>Free version of every prydan product. Start now upgrade as you grow</Text>
          <View style={{flexDirection:'row'}}>
           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonTitle} onPress={() => {
               navigation.navigate('Login');
             }}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button2}>
             <Text style={styles.buttonTitle} onPress={() =>{
               navigation.navigate('Signup');
             }}>SignUp</Text>
           </TouchableOpacity>
           </View>
          </View>

          <View style={styles.slide2}>
          <Image source={require('../../assets/Images/logo.png')}/>
           <Text style={styles.title}>Prydan CRM</Text>
           <Text style={styles.description}>Automate data entry and manual tasks,gain   visibility into your pip line, and keep contacts organized so you can close more deals with less work.</Text>
           <Text style={styles.subtitle}>Free version of every prydan product. start now upgrade as you grow</Text>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonTitle} onPress={() => {
               navigation.navigate('Login');
             }}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button2}>
             <Text style={styles.buttonTitle} onPress={()=> {
               navigation.navigate('Signup');
             }}>SignUp</Text>
           </TouchableOpacity>
           </View>
        </View>

        <View style={styles.slide3}>
        <Image source={require('../../assets/Images/logo.png')}/>
          <Text style={styles.title}>Marketing Free</Text>
          <Text style={styles.description}>Learn more about the people visiting site and what pages convert the most leads with easy-to-build lead forms and built-in analytics.</Text>
           <Text style={styles.subtitle}>Free version of every prydan product. start now upgrade as you grow</Text>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonTitle} onPress={() => {
               navigation.navigate('Login');
             }}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button2}>
             <Text style={styles.buttonTitle} onPress={() => {
               navigation.navigate('Signup');
             }}>SignUp</Text>
           </TouchableOpacity>
           </View>
        </View>

        <View style={styles.slide3}>
        <Image source={require('../../assets/Images/logo.png')}/>
          <Text style={styles.title}>Sales Free</Text><Text style={styles.description}>Track email opens and clicks, spend less time writing emails, log calls automotically, and speed up your sales process..</Text>
           <Text style={styles.subtitle}>Free version of every prydan product. start now upgrade as you grow</Text>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonTitle} onPress={() => {
               navigation.navigate('Login');
             }}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button2}>
             <Text style={styles.buttonTitle} onPress={() =>
              navigation.navigate('Signup')}>SignUp</Text>
           </TouchableOpacity>
           </View>
        </View>
        </Swiper>
    );
};
export default Onboarding;

