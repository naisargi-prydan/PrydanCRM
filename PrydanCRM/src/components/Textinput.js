import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';


const input = ({inputContainer, inputstyle, name, Label, onSubmit, labelTwo, labelOne, LabelStyle, containerStyle}) => {
  return (
    <View style={{styles.container,containerStyle}} >
    {
        Label?( 
            <Text style={[styles.LabelStyle,LabelStyle]} > {Label} </Text>
        ):labelOne && labelTwo ? ( <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} /><Text style={[styles.LabelStyle, LabelStyle]}>
                      {labelOne}
         </Text>
         <TouchableOpacity onPress={onSubmit}>
              <Text style={[styles.LabelStyle, { color: '#1B6ADF', fontSize: 12 }]}>
                 {labelTwo}    
              </Text>
          </TouchableOpacity></>
          </View>)
      :null   
    }
          
    <Card style={[styles.inputContainer,inputContainer]}>
      <TextInput
        {...rest}
        style={styles.inputStyle,inputStyle}
           name={name}>
      </TextInput>
    </Card>    
);    
};

const styles=StyleSheet.create ({
    inputContainer:{
        width:'100',
        margin:0,
        padding:0,
    },
    inputstyle:{
        hight:45,
        padingHorizontal:17,
    },
    container:{
        width:'100',
        paddingHorizontal:15,
    },
    LabelStyle:{
        fontsize:16,
        fontWeight:'Bold',
        color:'#3B3D3F',

    },
});
