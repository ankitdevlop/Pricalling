/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Image, ImageBackground, StatusBar, TextInput, TouchableHighlight} from 'react-native';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
// import {Icon}  from 'react-native-vector-icons/Icon';
function SecondPage({navigation}) {
  return (
    <LinearGradient colors={['#69c2d9', '#8400a1', '#731b30']} style={styles.gradient}>
 <StatusBar backgroundColor={"#69c2d9"}/>
      <View style={styles.trasnprent} >
<Text style={{color:"white",fontSize:35,margin:6,fontFamily:"fantasy"}} >Easy To Use <Image source={require('../../Assets/Imges/easy.png')} style={styles.infoImg2} /></Text>

<Text style={{color:"white",fontSize:25,margin:2,fontFamily:"fantasy"}} >No Charges Require <Image source={require('../../Assets/Imges/noCost.png')} style={styles.infoImg} /></Text>
<Text style={{color:"white",fontSize:25,margin:4,fontFamily:"monospace"}}>
Free calling and messaging worldwide 
</Text>

<View style={{justifyContent:"center", display:"flex", alignItems:"center"}}> 

<View style={styles.info}> 

<Image source={require('../../Assets/Imges/fi2.jpeg')} style={styles.image} />
</View>
</View>
<View style={styles.container}>
<ThemedButton name="cartman" type="secondary"onPress={() => navigation.navigate('Join now')}>Next</ThemedButton>
</View>
 
      </View>
      </LinearGradient>
  );
}
export default SecondPage;

const styles = StyleSheet.create(({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    height: 290,
    borderRadius: 14,
    marginTop:40,
    width: 360,
    borderColor: "white"
  },
  image: {
    width: 349,
    height:273 ,
    margin: 0,
    borderRadius:14,
  }, 
  buttonStyel: {
    backgroundColor:'transparent',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop:90
  },
  gradient: {
    flex: 1,
  },
  icons:{
    width:50,
    height:50
  },
  infoImg:{
    width:50,
    height:50
  },
  infoImg2:{
    width:90,
    height:70
  },
  infoImg3:{
 width:30,
 height:50
  },
  container: {
    marginTop:23,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
