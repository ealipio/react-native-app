import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function AddItem({ addItem }) {
  const [newItemText, setNewItemText] = useState();
  const onChange = (textValue) => setNewItemText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={newItemText}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        disabled={newItemText === undefined}
        onPress={() => {
          addItem(newItemText);
          setNewItemText(undefined);
        }}
      >
        <Text style={styles.btnText}>
          <AntDesign name="plus" size={24} color="black" />
          {'  Add Item'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
