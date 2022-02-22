/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  wrapper: {},
    container:
    {
      flex:1,
      alignItems:'center',
      backgroundColor:'#ffffff',
    },
    Img:{
      marginTop: 50,
      marginBottom: 50,
    },
    loginInput:{
      marginTop: 30,
      marginBottom:20,
    },

    textview:{
      //borderColor:'#CBD4E6',
      flexDirection:'row',
      marginTop:30,
      marginBottom:10,
    },
    text:{
      color:'#808080',
    },
    link: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: 'bold',
       fontSize: hp('1.6%'),
      alignSelf: 'center',
    },
    loginview:{
      marginTop:15,
    },
    loginbtn:{
      width: wp('5%'),
      paddingHorizontal:15,
      marginTop:40,
      marginBottom:10,
    },
});
