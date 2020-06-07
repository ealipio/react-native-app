import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen2 from './screens/Home';
import AddScreen from './screens/Add';
import ModifyScreen from './screens/Modify';

import { NoteProvider } from './context/noteContext';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNote" component={AddScreen} />
          <Stack.Screen name="Modify" component={ModifyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
