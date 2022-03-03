import React from 'react';
import { View} from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './style';
const AddInput = ({setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>
    <TextInput
    mode="flat"
    label={placeholder}
    OnChangeText={setValue}
    placeholder={placeholder}
    style = {styles.input}
    secureTextEntry={secureTextEntry}
    theme={{
      colors: {
                 placeholder: '#808080', text: '#808080', primary: '#808080',
                 underlineColor: 'white', background: 'white'
         }
     }}
    />   
   </View>
 );
};
export default AddInput;