// import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { firebase } from '../../config'
// import { signupStyles } from './styles';
// import Button from '../../components/Button';

// const Dashboard = () => {
//   const [email, setEmail] = useState('');
//   useEffect(() => {
//     firebase.firestore().collection('users')
//       .doc(firebase.auth().currentUser.uid).get()
//       .then((snapshot) => {
//         if (snapshot.exists) {
//           setEmail(snapshot.data())
//         } else {
//           console.log('User does not exist')
//         }
//       })
//   }, [])

//   return (
//     <SafeAreaView style={{ marginTop: 50 }}>
//       <Text>
//         Hello, {email.email}
//       </Text>
//       <Button
//         title="Log Out"
//         style={signupStyles.button}
//         onPress={() => { firebase.auth().signOut() }}
//       />
//     </SafeAreaView>
//   )
// }

// export default Dashboard

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../../components/ListItem'
import { SAMPLE_DATA } from '../../assets/data/sampleData';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItem
            marketCapRank={item.market_cap_rank}
            logoUrl={item.image}
            name={item.name}
            symbol={item.symbol}
            marketCap={item.market_cap}
            currentPrice={item.current_price}
            priceChangePercentage24h={item.price_change_percentage_24h}
          />
        )}
      />

    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 50,
    paddingHorizontal: 16
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // divider: {
  //   height: StyleSheet.hairlineWidth,
  //   backgroundColor: '#A9AAB1',
  //   marginHorizontal: 16,
  //   marginTop: 16,
  // }
})