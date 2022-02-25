/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import style from './style';
import AddInput from '../../components/AddInput';



const AddContact = ({navigation}) => {
  const[Firstname,setFirstname] = React.useState('');
  const[LastName,setLastName] = React.useState('');
  const[Email,setEmail] = React.useState('');
  const[Phonenumber, setPhonenumber] = React.useState('');
  return (
    <ScrollView style={{backgroundColor:'white'}}>
     
      <View style = {style.MainContainer}>
          <View style = {style.heading}>          
             <Text style={style.index}>Add Contact</Text>  
             <Text style={style.save}>SAVE</Text>
          </View>  

       <View style={style.inputcontainer}>   
        <AddInput     
           style={style.addinput}
           placeholder="First name"
            setValue={setFirstname}
        />  
        <AddInput
           style={style.addinput}
           placeholder="Last name"
           setValue={setLastName}
        />
        <AddInput
              style={style.addinput}
              placeholder="Email"
              setValue={setEmail}
        />
       <AddInput
           style={style.addinput}
            placeholder="Phonenumber"
            setValue={setPhonenumber}
        />
     </View>
     <View style={style.instructionview}>
        <Text style={style.instruction}>Start by entering an email address, name, or both</Text>
        </View>
  </View>       
    </ScrollView>
  );
};

export default AddContact;

