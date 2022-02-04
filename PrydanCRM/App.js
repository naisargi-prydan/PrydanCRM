/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useColorScheme } from 'react-native';

const App = () => {
  const scheme = useColorScheme();
  return (<Text style={{ color: scheme === 'dark' ? 'white' : 'black'}}>Hello World</Text>);
};



export default App;
