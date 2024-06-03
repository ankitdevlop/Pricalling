/* eslint-disable prettier/prettier */
import { useForm, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useDispatch } from 'react-redux';
import { Userlogin, signup } from './userSlice';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserAuth() {
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let res;
      if (login) {
        res = await dispatch(Userlogin(data)).unwrap();
      } else {
        res = await dispatch(signup(data)).unwrap();
      }
      await AsyncStorage.setItem('token', res.token);
      Toast.show("User Logged In Successfully");
      navigation.navigate('Tabs');
    } catch (err) {
      Toast.show(err?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#69c2d9', '#8400a1', '#731b30']} style={styles.gradient}>
      <StatusBar backgroundColor={"#69c2d9"} />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'#fff'} size="large" />
        </View>
      )}
      <View style={{ height: 900, alignItems: 'center' }}>
        <Text style={styles.heading}>
          {login ? 'User Login' : 'User Registration'}
        </Text>
        <Text style={{ color: 'white' }}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="Enter your email id"
                value={value}
                style={styles.formStyle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
              {errors.email && (
                <Text style={{ color: 'red' }}>Invalid email address</Text>
              )}
            </View>
          )}
          name="email"
          rules={{ required: true, pattern: /^\S+@\S+\.\S+$/i }}
        />
        <Text style={{ color: 'white' }}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                placeholder="Enter your password"
                value={value}
                style={styles.formStyle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                secureTextEntry={true}
              />
              {errors.password && (
                <Text style={{ color: 'red' }}>Password is required</Text>
              )}
            </View>
          )}
          name="password"
          rules={{ required: true }}
        />
        {!login && (
          <View>
            <Text style={{ color: 'white' }}>Type User Name</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    placeholder="Type user name here"
                    value={value}
                    style={styles.formStyle}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                  />
                  {errors.userName && (
                    <Text style={{ color: 'red' }}>Username is required</Text>
                  )}
                </View>
              )}
              name="userName"
              rules={{ required: true }}
            />
          </View>
        )}
        <Text style={{ color: 'red' }}>
          {login ? 'New user?' : 'Already a user?'}{' '}
          <Text style={{ color: 'white' }} onPress={() => setLogin(!login)}>
            {login ? 'Register Now' : 'Login'}
          </Text>
        </Text>
        <View style={{ marginTop: 23 }}>
          <ThemedButton name="cartman" type="danger" onPress={handleSubmit(onSubmit)}>
            {login ? 'Login' : 'Register'}
          </ThemedButton>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: 20,
  },
  text: {
    backgroundColor: '#00ffcd',
    textAlign: 'center',
    width: 100,
    fontWeight: '900',
    height: 40,
    margin: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttons: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formStyle: {
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 8,
    width: 300,
    borderWidth: 2,
    color: 'red',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    width: 'auto',
  },
  modal: {
    margin: 12,
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#123456',
    shadowColor: '#7393ec',
  },
  gradient: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default UserAuth;
