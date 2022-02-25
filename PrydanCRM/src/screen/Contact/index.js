import React from 'react';
import {SafeAreaView, Text, View,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style';

const Contact = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <View>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Contact           
         </Text>    
          </View>
          <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.addcontactbtn}
            onPress = {() =>{ navigation.navigate('AddContact');}}>     
            <Text>
              <FontAwesome5 name="user-plus" size={20} color="black"/>
            </Text>
            </TouchableOpacity>           
          </View>    
        </View>    
    </SafeAreaView>
  );
};

export default Contact;