/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect}  from 'react';
import { useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';
import {Login, Signup, Onboardingscreen, ConfirmEmail, ForgotPassword, AddContact} from './screen/index';

import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './Navigation/TabNavigator';

const AppStack = createNativeStackNavigator();



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, );
  const scheme = useColorScheme();
    return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Onboarding"
          component={Onboardingscreen}
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
        <AppStack.Screen
          name="ConfirmEmail"
          component={ConfirmEmail}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        {/* <AppStack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        /> */}
        <AppStack.Screen
        name="Contact"
        component={TabNavigator}
        options={{headerShown:false}}
        />
        <AppStack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown:false}}
        />
      </AppStack.Navigator>
      </NavigationContainer>
  );
};
export default App;
