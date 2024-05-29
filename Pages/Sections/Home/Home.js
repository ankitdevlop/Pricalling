/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text,View, ScrollView,Image,StyleSheet, Modal, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView>
       <LinearGradient colors={['#69c2d9', '#030308', '#00ffcd']} style={styles.gradient}>
    <View style={styles.center}>
<Text style={styles.nameText}>Hello Ankit Dubey !
</Text>
<Image
              source={require('../../../Assets/Imges/profile.png')} style={{width:300,height:300}}/>
 <Text  onPress={toggleModal} style={styles.buttonText2}>Change Icons </Text>
    </View>
    {/* <View style={{marginTop:34 , textAlign:"center",}}>


      <Text style={{textAlign:"center", fontSize:29, color:"#fff", fontWeight:700}}>   Your Activity</Text>
      <Text  style={{textAlign:"center", fontSize:29, color:"#fff", fontWeight:700}}>
      Last  Chat
        </Text>
        <View  style={{display:"flex",flexDirection:"row", justifyContent:"center", flexWrap:"wrap",}}>
          <Text>User1  <Image
              source={require('../../../Assets/ProfileIcons/pro2.png')}
              style={styles.proIcons}
            /></Text>
           
            <Text> User1 <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            /></Text>
            
            <Text> User1 <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            /></Text>
           
            <Text> User1 <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            /></Text>
          
            <Text> User1 <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            /></Text>
          
            <Text> User1 <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            /></Text>

           
            </View>
    </View> */}
    </LinearGradient>

    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Select profile image from below</Text>

            <View  style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
            <Image
              source={require('../../../Assets/ProfileIcons/pro2.png')}
              style={styles.proIcons}
            />
            <Image
              source={require('../../../Assets/ProfileIcons/pro3.png')}
              style={styles.proIcons}
            />
            <Image
              source={require('../../../Assets/ProfileIcons/pro4.png')}
              style={styles.proIcons}
            />
            <Image
              source={require('../../../Assets/ProfileIcons/pro5.png')}
              style={styles.proIcons}
            />
            <Image
              source={require('../../../Assets/ProfileIcons/pro6.png')}
              style={styles.proIcons}
            />
            </View>
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
              <Text style={styles.buttonText}>Save Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 nameText:{
  fontSize:34,
  fontWeight:"condensedBold",
  // fontWeight:800
  color:"#fff"
 },
 selectorHeding:{
  fontSize:19
 },
 formStyle: {
  backgroundColor: 'white',
  margin: 12,
  borderRadius: 8,
  width: 150,
  borderWidth: 2,
  color: 'red',
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
modalText2: {
  fontSize: 18,
  marginBottom: 20,
  fontWeight:600
},
buttonText: {
  color: 'white',
  fontSize: 14,
  padding:8,
  backgroundColor:"#22bb33",
  borderRadius:6
},
buttonText2: {
  color: 'white',
  fontSize: 14,
  padding:8,
  backgroundColor:"#0d2424",
  borderRadius:6
},
proIcons:{
width:50,
height:50,
margin:10
}
});