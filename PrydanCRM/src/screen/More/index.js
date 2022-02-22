/* eslint-disable prettier/prettier */
import React  from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
const More = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View>
                <Text style ={{fontSize:20, fontWeight:'bold'}}>More screen</Text>
            </View>
        </SafeAreaView>
    );
};
export default More;
