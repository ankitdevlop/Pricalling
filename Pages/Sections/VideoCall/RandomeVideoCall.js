/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
import { RNCamera } from 'react-native-camera';

function RandomeVideoChat({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef(null);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);

  const toggleCameraType = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    );
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const LeaveChat = () => {
    toggleModal();
    navigation.navigate('Video Call');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <LinearGradient colors={['#69c2d9', '#8400a1', '#1c8d98']} style={styles.gradient}>
        <View style={styles.userScreen}>
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={cameraType}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={true}
          />
          <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
            <Image
              source={require('../../../Assets/Imges/camFlip.png')}
              style={styles.flipIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.userScreen2}>
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={cameraType}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={true}
          />
          <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
            <Image
              source={require('../../../Assets/Imges/camFlip.png')}
              style={styles.flipIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <ThemedButton name="rick" type="danger" onPress={toggleModal}>Leave Chat</ThemedButton>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Do you really want to leave?</Text>
              <View style={styles.modalButtonContainer}>
                <ThemedButton name="rick" type="danger" onPress={LeaveChat}>Yes!</ThemedButton>
              </View>
              <View style={styles.modalButtonContainer}>
                <ThemedButton name="rick" type="danger" onPress={toggleModal}>No!</ThemedButton>
              </View>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  userScreen: {
    width: '100%',
    // backgroundColor: '#fff',
    padding: 4,
    marginVertical: 12,
    alignItems: 'center',
    height: 302,
  },
  userScreen2: {
    width: '50%',
    // backgroundColor: '#fff',
marginTop:116,
    alignItems: 'center',
    height: 102,
  },
  preview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:15
  },
  button: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  flipIcon: {
    width: 60,
    height: 60,
  },
  center: {
    marginTop: 46,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius:45
  },
  modalContainer: {
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    padding: 7,
  },
});

export default RandomeVideoChat;
