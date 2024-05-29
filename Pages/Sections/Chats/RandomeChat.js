/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Modal,View, StyleSheet, ImageBackground, Dimensions, Image, Text, Alert,PermissionsAndroid } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';

const { height, width } = Dimensions.get('window');

function RandomeChat({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const Leavechat=()=>{
  toggleModal()
  navigation.navigate('Chat')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={['#69c2d9', '#a637d5', '#00ffcd']} style={styles.gradient}>
        <View style={styles.stick}>

          <ThemedButton name="rick" type="secondary"  onPress={toggleModal}>Leave Chat</ThemedButton>
        </View>
        <Text>User
          <Image
            source={require('../../../Assets/Imges/newpep.png')}
            style={styles.image}
          />
        </Text>
        
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.sender}>

            <Text style={styles.text}>Hello</Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officia.</Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
          <View style={styles.sender}>

            <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perspiciatis vel dolorem, quibusdam modi sed sit, odit minus corrupti hic laudantium tempore nihil ducimus consequatur, quia amet doloremque quidem cum adipisci consectetur tempora.</Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.</Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
          <View style={styles.sender}>

            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia totam ratione sequi veniam beatae incidunt molestiae assumenda fugit iusto asperiores eveniet, eum voluptatibus quia expedita delectus id suscipit officiis architecto accusamus optio? Earum?</Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}>  Kya chal rha hai babu </Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
          <View style={styles.sender}>

            <Text style={styles.text}>Kucb nahi chal rha hai tu apna kaam kar </Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}>  
            Acha Kya chal rha hia </Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
          <View style={styles.sender}>

            <Text style={styles.text}>nahi</Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}>  Kuch karna hai ki nahi </Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
          <View style={styles.sender}>

            <Text style={styles.text}>Hello babu kya ho rha hai </Text>
            <Image
              source={require('../../../Assets/Imges/deleverd.png')}
              style={styles.viewIcons}
            />
          </View>

          <View style={styles.receiver}>
            <Text style={styles.text}>  Kuch nahi babu</Text>
            <Image
              source={require('../../../Assets/Imges/seen.png')}
              style={styles.viewIcons}
            />
          </View>
        </ScrollView>

        <View style={styles.container}>
          <TouchableOpacity>
            <Text>Typing....</Text>
            <Image
              source={require('../../../Assets/Imges/attach.png')}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity>

            <Image
              source={require('../../../Assets/Imges/send.png')}
              style={styles.icon2}
            />
          </TouchableOpacity>
          <TextInput placeholder='Type here...... 😅😅' style={styles.input} />
          <View>
          </View >
        </View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Do you really want to leave</Text>

            <View style={{padding:7}}>
            <ThemedButton name="rick" type="danger"  onPress={Leavechat}>Yes!</ThemedButton>
            </View>
            <View style={{padding:7}}>
            <ThemedButton name="rick" type="danger"  onPress={toggleModal}>No !</ThemedButton>
            </View>
          </View>
        </View>
      </Modal>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 14,
    margin: 2,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: 50, height: 60,
    margin: 45

  },
  input: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 270,
    marginRight: 49
  },
  icons: {
    width: 50,
    height: 50,
    marginRight: 328,
    marginBottom: -49
  },
  icon2: {
    width: 50,
    height: 50,
    marginLeft: 307,
    marginBottom: -49
  },
  scrollView: {
    width: 400,
    flexGrow: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  sender: {
    alignSelf: 'flex-start',
    backgroundColor: '#d1e7dd',
    padding: 10,
    borderRadius: 10,
    maxWidth: '50%',
    marginVertical: 5,
  },
  receiver: {
    alignSelf: 'flex-end',
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 10,
    maxWidth: '50%',
    marginVertical: 5,
  },
  text: {
    color: '#000',
  },
  viewIcons: {
    width: 30,
    height: 30,
    marginLeft: 0,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  },
});

export default RandomeChat;
