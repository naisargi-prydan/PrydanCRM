/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React  from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

const Contacts = ({navigation }) => {
    return (
        <SafeAreaView  style={styles.maincontainer}>
            <View>
                <Text style ={{fontSize:20, fontWeight:'bold', color:'black'}}>Contacts screen</Text>
            </View>
            <View>
            <TouchableOpacity style={styles.addbutton} onPress={() => {
               navigation.navigate('AddContact');
             }}>
             <Text style={styles.buttonTitle}>Add Contact</Text>
           </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Contacts;
