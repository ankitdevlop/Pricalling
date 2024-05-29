import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FirstPage from './Pages/FrontPages/first';
import SecondPage from './Pages/FrontPages/SecondPage';
import ThirdPage from './Pages/FrontPages/ThirdPaage';
import UserAuth from './Pages/Authentication/userOprations';
import HomeScreen from './Pages/Sections/Home/Home';
import ChatScreen from './Pages/Sections/Chats/ChatPage';
import RandomeChats from './Pages/Sections/Chats/RandomeChat';
import VideoCallScreen from './Pages/Sections/VideoCall/VidoCallPage';
import HistoryScreen from './Pages/Sections/History/ChatHistory';
import RandomeVideoChat from './Pages/Sections/VideoCall/RandomeVideoCall';
// Create Stack Navigator
const Stack = createStackNavigator();
// Create Bottom Tab Navigator
const Tabs = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#030308'},
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontWeight: 'bold', // Title font weight
            fontSize: 20, // Title font size
            color: '#fff', // Title color
            textAlign: 'center',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assets/Imges/home.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontWeight: 'bold', // Title font weight
            fontSize: 20, // Title font size
            color: '#fff', // Title color
            textAlign: 'center',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assets/Imges/chat.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Video Call"
        component={VideoCallScreen}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assets/Imges/vidCall.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assets/Imges/history.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={FirstPage}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 44,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Features"
        component={SecondPage}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 34,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Join now"
        component={ThirdPage}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 34,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="User Login"
        component={UserAuth}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 29,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Random Chat"
        component={RandomeChats}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 29,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Random Video Chat"
        component={RandomeVideoChat}
        options={{
          headerStyle: {
            backgroundColor: '#69c2d9',
          },
          headerTitleStyle: {
            fontSize: 29,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}} // Hide the header for the tab navigator
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
