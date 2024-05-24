import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Otp = ({ route }) => {
  const { phoneNumber } = route.params;
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace('+84 ', '').replace(/-/g, '').replace(/ /g, '');
  };

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        formatPhoneNumber(phoneNumber),
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      Alert.alert('Verification code has been sent to your phone number.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      await firebase.auth().signInWithCredential(credential);
      Alert.alert('Login successful. Welcome to dashboard');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.otpText}>Enter the verification code sent to</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      <TextInput
        placeholder='Verification code'
        onChangeText={setCode}
        keyboardType='number-pad'
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
        <Text style={styles.buttonText}>Confirm code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sendCode: {
    width: '80%',
    height: 48,
    backgroundColor: '#3498db',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Otp;

