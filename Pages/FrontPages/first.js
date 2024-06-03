/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Button, Image, ImageBackground, StatusBar, TextInput, TouchableHighlight } from 'react-native';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
// import {Icon}  from 'react-native-vector-icons/Icon';
function FirstPage({ navigation }) {
  const getData = async () => {
      const value = await AsyncStorage.getItem('token');
        console.log('tokens',value )
  }
  useEffect(()=>{
getData()
  },[])
  return (
    <LinearGradient colors={['#69c2d9', '#8400a1', '#731b30']} style={styles.gradient}>
      <StatusBar backgroundColor={'#69c2d9'} />
      <View style={styles.trasnprent} >
        {/* <Text style={{ color: "white", fontSize: 44, margin: 6, fontFamily: "fantasy" }} >Welcome</Text> */}
        <Text style={{ color: 'white', fontSize: 44, margin: 6, marginLeft:16, fontFamily: 'fantasy' }} >App</Text>
        <Text style={{ color: 'white', fontSize: 20, margin: 12, fontFamily: 'monospace' }}>
          "Connect with anyone, anywhere, anytime!"
        </Text>
        <View style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

          <View style={styles.info}>

            <Image source={require('../../Assets/Imges/fiImg.jpeg')} style={styles.image} />
          </View>
        </View>
        {/* onPress={() => navigation.navigate('Features')} */}
        <View style={styles.container}>
        <ThemedButton name="cartman" type="primary"  onPress={() => navigation.navigate('Features')}>Next</ThemedButton>
        </View>
      </View>
    </LinearGradient>
  );
}
export default FirstPage;

const styles = StyleSheet.create(({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    height: 390,
    marginTop: 50,
    borderRadius: 14,
    width: 360,
    borderColor: 'white',
  },
  image: {
    width: 349,
    height: 373,
    margin: 0,
    borderRadius: 14,
  },
  buttonStyel: {
    backgroundColor:'transparent',
    width: 50,
    height: 50,
    marginTop:90,
    borderRadius: 50,
  },
  gradient: {
    flex: 1,
  },
  icons: {
    width: 50,
    height: 50,
  },
  container: {
    marginTop:23,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
