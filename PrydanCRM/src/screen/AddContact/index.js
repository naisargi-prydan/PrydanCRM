/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import style from './style';
import  AddInput  from '../../components/AddInput';

const AddContact = ({navigation}) => {
  return (
    <><View style={style.mainContainer}>
      <Text style={style.text}>AddContact</Text>
    </View><View>
        <AddInput
          style={style.AddInput}
          placeholder="FirstName"
          setValue={setFirstName} />
      </View></>
  );
};

export default AddContact;
