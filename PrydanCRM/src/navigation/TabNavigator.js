/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Today, Contacts, Deals, Activity, More } from '../screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator  screenOptions={{
            tabBarShowLabel:true,
            headerShown: false,
            tabBarStyle:{backgroundColor: '#FFFFFF'},
            tabBarInactiveTintColor: '#83888B',
            tabBarActiveTintColor: '#41773F',
            }}>
            <Tab.Screen name="Today" component={Today} options={{
                tabBarIcon: ({color, size})=> (
                    <MaterialCommunityIcons name ="align-vertical-bottom"  color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="Contacts" component={Contacts} options={{
                tabBarIcon:({color, size}) =>( 
                    <MaterialCommunityIcons name="account" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name ="Deals" component={Deals} options={{
                tabBarIcon:({color, size}) =>( 
                    <MaterialCommunityIcons name="handshake"  color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="Activity" component={Activity} options={{
                tabBarIcon:({color, size}) =>( 
                    <MaterialCommunityIcons name="mail"  color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="More" component ={More} options={{
                tabBarIcon:({color, size}) =>( 
                    <MaterialCommunityIcons name="menu"  color={color} size={size}/>
                )
            }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigator;

