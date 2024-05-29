/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';

function ChatScreen({navigation}) {
  return (
    <ScrollView>
   <LinearGradient colors={['#69c2d9', '#8400a1', '#d92e57']} style={styles.gradient}>
    <View style={styles.container}>
      <Image
        source={require('../../../Assets/Imges/195.png')}
        style={styles.image}
        />
    </View>
    <View>
      <Text style={styles.selectorHeding}>Join Radome Chats With new human being(इंसान)  </Text>
    </View>
    {/* <AwesomeButton name="burce" type="primary" > Text</AwesomeButton> */}
    <View style={styles.center}>

    <ThemedButton name="rick" type="secondary"onPress={() => navigation.navigate('Random Chat')}>Join Chat</ThemedButton>
    </View>
    </LinearGradient>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:-67,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:14,
    margin:23
  },
  image: {
    marginTop:110,
    width: 450,
    height: 390,
  },
  selectorHeding:{
    fontSize:24,
    textAlign:"center",
    color:"#fff",
    padding:14,
   },
   buttonText2: {
    color: 'white',
    fontSize: 14,
    padding:8,
    backgroundColor:"#0d2424",
    borderRadius:6
  },
  center: {
    marginTop:92,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
