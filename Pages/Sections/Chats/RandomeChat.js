/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedButton } from 'react-native-really-awesome-button';
import io from 'socket.io-client';

const socket = io('https://websocketbackedn.onrender.com');

const { height, width } = Dimensions.get('window');

function RandomChat({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [chatDisabled, setChatDisabled] = useState(false);
  const [userStatus, setUserStatus] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const flatListRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const leaveChat = () => {
    toggleModal();
    Alert.alert("User left the room");
    setChatDisabled(true);
    socket.disconnect();
    navigation.navigate('Chat');
  };

  useEffect(() => {
    socket.on('chat message', msg => {
      if (typeof msg === 'string' && msg === 'The user has left the chat.') {
        setChatDisabled(true);
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          { key: Math.random().toString(), text: msg.text, sender: msg.id === socket.id, seen: msg.seen },
        ]);
      }
    });

    socket.on('user connected', msg => {
      setUserStatus(msg);
    });

    socket.on('user disconnected', msg => {
      setUserStatus(msg);
      setChatDisabled(true);
    });

    socket.on('typing', isTyping => {
      setIsTyping(isTyping);
    });

    socket.on('message seen', () => {
      setMessages(prevMessages => prevMessages.map(msg => ({ ...msg, seen: true })));
    });

    return () => {
      socket.off('chat message');
      socket.off('user connected');
      socket.off('user disconnected');
      socket.off('typing');
      socket.off('message seen');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && !chatDisabled) {
      socket.emit('chat message', message);
      setMessage('');
    } else if (chatDisabled) {
      Alert.alert("You cannot send messages as the other user has left the chat.");
    }
  };

  const handleTyping = (text) => {
    setMessage(text);
    socket.emit('typing', text.length > 0);
  };

  const renderMessage = ({ item }) => (
    <View style={item.sender ? styles.senderContainer : styles.receiverContainer}>
      <Text style={{ color: item.color || 'black' }}>{item.text}</Text>
      {item.sender && item.seen && <Text style={styles.seenText}>Seen</Text>}
    </View>
  );

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isBottom = contentOffset.y >= contentSize.height - layoutMeasurement.height - 20;
    setShowScrollToBottom(!isBottom);
    if (isBottom) {
      socket.emit('message seen');
    }
  };

  const scrollToBottom = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#69c2d9', '#a637d5', '#00ffcd']}
        style={styles.gradient}>
        <View style={styles.header}>
          <ThemedButton name="rick" type="secondary" onPress={toggleModal}>
            Leave Chat 
          </ThemedButton> 
          <Text style={styles.userStatus}>{userStatus}</Text>
        </View>

        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.key}
          style={styles.chatContainer}
          onScroll={handleScroll}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={handleTyping}
            placeholder="Type your message here..."
            editable={!chatDisabled}
          />
          <ThemedButton name="rick" type="primary" onPress={sendMessage}>
            Send
          </ThemedButton>
        </View>

        {isTyping && <Text style={styles.typingStatus}>User is typing...</Text>}

        {showScrollToBottom && (
          <TouchableOpacity style={styles.scrollToBottomButton} onPress={scrollToBottom}>
            <Text style={styles.scrollToBottomText}>↓</Text>
          </TouchableOpacity>
        )}

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Do you really want to leave?</Text>
              <View style={styles.modalButton}>
                <ThemedButton
                  name="rick"
                  type="danger"
                  onPress={leaveChat}>
                  Yes!
                </ThemedButton>
              </View>
              <View style={styles.modalButton}>
                <ThemedButton
                  name="rick"
                  type="secondary"
                  onPress={toggleModal}>
                  No!
                </ThemedButton>
              </View>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  userStatus: {
    fontSize: 16,
    color: 'white',
  },
  chatContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    marginVertical: 10,
  },
  senderContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#d1e7dd',
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
    marginVertical: 5,
  },
  receiverContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
    marginVertical: 5,
  },
  seenText: {
    fontSize: 10,
    color: 'gray',
  },
  typingStatus: {
    position: 'absolute',
    bottom: 70,
    left: '5%',
    fontSize: 16,
    color: 'gray',
  },
  scrollToBottomButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
  },
  scrollToBottomText: {
    color: 'white',
    fontSize: 20,
  },
});

export default RandomChat;
