/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text,View, ScrollView,Image,StyleSheet, Modal, TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useDispatch } from 'react-redux';
import { logout } from '../../Authentication/userSlice';
const { height, width } = Dimensions.get('window');
function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); 
navigation.navigate('Welcome');
  };


  return (   <LinearGradient
        colors={['#69c2d9', '#a637d5', '#00ffcd']}
        style={styles.gradient}>
  <View style={{flex:1,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
      <ThemedButton name="cartman" type='primary' onPress={handleLogout}>Log Out</ThemedButton>
    </View>
        <Image
            source={require('../../../Assets/Imges/home2.png')}
            style={styles.image}
          />

          <View style={{flex:1,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
<ThemedButton name="cartman" type='primary'>Explore Now</ThemedButton>            
          </View>
        </LinearGradient>


  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width:width,
    height: 450,
    // marginTop:10
  },
});