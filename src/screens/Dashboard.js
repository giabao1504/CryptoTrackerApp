import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { firebase } from '../../config'
import { signupStyles } from './styles';
import Button from '../../components/Button';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setEmail(snapshot.data())
        } else {
          console.log('User does not exist')
        }
      })
  }, [])

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Text>
        Hello, {email.email}
      </Text>
      <Button
        title="Log Out"
        style={signupStyles.button}
        onPress={() => { firebase.auth().signOut() }}
      />
    </SafeAreaView>
  )
}

export default Dashboard