/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '300',
 },
 title: {
    fontSize:22,
    fontWeight: '500',
    marginTop: 30,
    paddingVertical: 10,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    textAlign:'center',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 15,
    paddingTop: 100,
    textAlign:'center',
    marginHorizontal: 15,
    paddingVertical: 20,
    fontWeight: '400',
  },
  Img:{
    height: 200,
    width: 250,
  },
  buttons:{
    flexDirection: 'row',
    flex:1,
    marginBottom: 10,
  },
  button1:{
    backgroundColor: '#FF7C03',
    paddingVertical:14,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 15,
    height: 50,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  button2:{
    backgroundColor: '#FF7C03',
    paddingVertical:14,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTitle:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
});
