/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

const Spacer = (width,height,color) => {
  return (
    <View
      style={{
          width: width ? width : 100,
          height: height ? height : 15,
          backgroundColor: color,
      }}/>
  );
};
export default Spacer;
