import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardingScreen from './src/screen/OnBoardingScreen';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';

const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
