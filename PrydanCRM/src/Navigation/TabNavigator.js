import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Today, Contact, Deals, Activity, More} from '../screen';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        
      <Tab.Navigator
        screenOptions = {{
        tabBarShowLabel: false,
        headerShown: false,
       // tabBarStyle:{backgroundColor: '#FFFFFF'},
        tabBarInactiveTintColor: '#D8D8D8',
        tabBarActiveTintColor: '#41773F',
       }}>
        
        <Tab.Screen name="Today" component={Today} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="align-vertical-bottom" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="Contact" component={Contact}  options={{
            // tabBarBadge:3,
            // tabBarBadgeStyle:{backgroundColor: '#fff'},
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="Deals" component={Deals} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="handshake" color={color} size={size}/>
            )
        }}/>
           <Tab.Screen name="Activity" component={Activity} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="email-open" color={color} size={size}/>
            )
        }}/>
           <Tab.Screen name="More" component={More} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name= "menu" color={color} size={size}/>
            )
        }}/>
     </Tab.Navigator>
     
    );
};

 export default TabNavigator;
