/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    button:{
        borderRadius:1,
        paddingVertical:14,
        // paddingHorizontal: 10,
        backgroundColor: '#D8D8D8',
        height: hp('6%'),
        width: wp('79%'),

    },
    buttonText:{
        color:'#333333',
        fontWeight:'normal',
        fontSize:16,
        textAlign:'center',
        justifyContent:'space-between',

    },
});

