/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {ThemedButton} from 'react-native-really-awesome-button';
import {useDispatch} from 'react-redux';
import {logout} from '../../Authentication/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const {height, width} = Dimensions.get('window');

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('token');
    dispatch(logout());
    Toast.show('Log out Successfully');
    setLoading(false);
    navigation.navigate('Welcome');
  };

  return (
    <LinearGradient
      colors={['#69c2d9', '#a637d5', '#00ffcd']}
      style={styles.gradient}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'#fff'} size="large" />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <ThemedButton name="cartman" type="primary" onPress={handleLogout}>
          Log Out
        </ThemedButton>
      </View>
      <Image
        source={require('../../../Assets/Imges/home2.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <ThemedButton name="cartman" type="primary">
          Explore Now
        </ThemedButton>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  image: {
    width: width,
    height: 450,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
