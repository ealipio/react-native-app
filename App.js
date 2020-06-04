import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'potato' },
    { id: uuidv4(), text: 'orange' },
    { id: uuidv4(), text: 'apple' },
    { id: uuidv4(), text: 'banana' },
    { id: uuidv4(), text: 'tomato' },
  ]);

  const deleteItem = (id = '') => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (text = '') => {
    if (!text) {
      Alert.alert('nothing to add');
    } else {
      setItems((prevItems) => [{ id: uuidv4(), text }, ...prevItems]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
