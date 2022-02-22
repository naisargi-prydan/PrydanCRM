/* eslint-disable prettier/prettier */
import React  from 'react';
import {Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
const Activity = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View>
                <Text style ={{fontSize:20, fontWeight:'bold'}}>Activity screen</Text>
            </View>
        </SafeAreaView>
    );
};
export default Activity;
