import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Button,
  Alert,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

export default function Home() {
  console.log('app+executed :)', Platform);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#00f',
          width: '50%',
          height: 70,
        }}
      />
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 2, backgroundColor: '#a19' }} />
      </TouchableNativeFeedback>
      <Text style={styles.text}>Cod3a</Text>
      <TouchableHighlight onPress={() => console.log('on press')}>
        <Image
          source={{
            width: 300,
            height: 400,
            uri: 'https://i.picsum.photos/id/971/300/400.jpg',
          }}
          blurRadius={0.3}
          fadeDuration={2000}
          style={styles.logo}
        />
      </TouchableHighlight>
      <Text style={styles.text}>cod3a.com</Text>
      <Button title="press me" onPress={() => Alert.alert('Au!')} />
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: { width: 250, borderRadius: 10 },
  text: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});
