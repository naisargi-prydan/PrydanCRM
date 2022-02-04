/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect}  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import OnBoardingScreen from './src/screen/OnBoardingScreen';
import {Login, Signup, Onboardingscreen} from './screen/index';
import SplashScreen from 'react-native-splash-screen';


const AppStack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, );
    return (
    <NavigationContainer>
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
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
