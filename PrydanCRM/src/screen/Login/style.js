/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

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
      fontSize: 14,
      alignSelf: 'center',
    },
    loginbtn:{
      paddingHorizontal:15,
      marginTop:30,
      marginBottom:10,
    },
});
