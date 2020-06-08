import React from 'react';
//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import AddScreen from './screens/Add';
import ModifyScreen from './screens/Modify';

import useFont from './hooks/useFont'

import NoteProvider from './context/noteContext';

const Stack = createStackNavigator();

export default function App() {
  useFont()
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNote" component={AddScreen} />
          <Stack.Screen name="Modify" component={ModifyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}
