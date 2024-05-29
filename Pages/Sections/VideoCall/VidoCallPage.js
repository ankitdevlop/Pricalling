/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, PermissionsAndroid, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';

function VideoCallScreen({navigation}) {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Chat App Camera Permission',
          message: 'Cool Chat App needs access to your camera so you can chat with others.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Cool Photo App Microphone Permission',
          message: 'Cool Video Chat app needs access to your microphone so you can talk to others.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the microphone');
        navigation.navigate('Random Video Chat');
      } else {
        console.log('Microphone permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleJoinChat = async () => {
    await requestCameraPermission();
    await requestMicrophonePermission();
  };

  return (
    <ScrollView>
      <LinearGradient colors={['#69c2d9', '#8400a1', '#d92e57']} style={styles.gradient}>
        <View style={styles.container}>
          <Image
            source={require('../../../Assets/Imges/video.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.selectorHeading}>
            Join Random Video Chat From Here and meet new human beings (इंसान)
          </Text>
        </View>
        <View style={styles.center}>
          <ThemedButton name="rick" type="danger" onPress={handleJoinChat}>
            Join Chat
          </ThemedButton>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    marginTop: -67,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    margin: 23,
  },
  image: {
    marginTop: 110,
    width: 450,
    height: 390,
  },
  selectorHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    padding: 14,
  },
  center: {
    marginTop: 92,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoCallScreen;
