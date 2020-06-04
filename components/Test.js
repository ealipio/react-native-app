import React from 'react';
import { StatusBar, View, Text, StyleSheet, Platform } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'dodgerblue', flex: 0.2 }}>
        <Text style={{color: '#FFF', fontSize: 25, textAlign:'center'}}>Cod3a</Text>
      </View>
      <View style={[styles.item, styles.gold]}></View>
      <View style={[styles.item, styles.peru]}></View>
      <View style={[styles.item, styles.blue]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#105',
    flex: 1,
    //flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
  },
  item: {
    flex: 1,
    width: 50,
    height: 100,
    margin: 10,
  },
  peru: { backgroundColor: 'peru' },
  gold: { backgroundColor: 'gold' },
  blue: { backgroundColor: 'dodgerblue' },
});
