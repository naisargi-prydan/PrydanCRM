/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from './style';


const button = (props, onPress) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress} >
            <View style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default button;
