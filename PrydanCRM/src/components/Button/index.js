/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from './style';


const button = props => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default button;
