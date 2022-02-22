/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    maincontainer:{
      flex:1,
      alignItems:'center',
      backgroundColor:'#ffffff',
      },
      addbutton:{
    marginBottom:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#D8D8D8',
    borderRadius:100,
    borderWidth: 1,
    borderColor: '#fff'
      //   marginTop:10,
      // borderRadius:5,
      // paddingVertical:14,
      // // paddingHorizontal: 10,
      // backgroundColor: '#D8D8D8',
      // height: hp('6%'),
      // width: wp('79%'),

      },
});

