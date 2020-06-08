import React, { createContext, useState } from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const errorHandler = (e) => {
  Alert.alert('Notes Error', `Sorry about the issue: ${e}`, [{ text: 'ok' }], {
    cancelable: false,
  });
};

export const NoteContext = createContext();

const NoteProvider = (props) => {
  const [contextNotes, setContextNotes] = useState([]);

  const getContextNotes = () => {
    // try {
    //   const storedNotes = await AsyncStorage.getItem('@notes');
    //   if(storedNotes) {
    //     setContextNotes([...JSON.parse(storedNotes)]);
    //   }
    //   return contextNotes;
    // } catch (e) {
    //   errorHandler(e);
    // }
    return contextNotes;
  };
  const addContextNote = async (note) => {
    setContextNotes([...contextNotes, note]);
    await storeData();
  };
  const updateContextNote = async (note, id) => {
    // remove
    const newContextNotes = contextNotes.filter((note) => note.id !== id);
    // add new note
    const newNotes = [...newContextNotes, { ...note, id }];
    setContextNotes(newNotes);
    await storeData();
  };
  const deleteContextNote = async (id) => {
    setContextNotes(contextNotes.filter((ctx) => ctx.id !== id));
    await storeData();
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@notes', JSON.stringify([...contextNotes]));
    } catch (e) {
      errorHandler(e);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        addContextNote,
        getContextNotes,
        updateContextNote,
        deleteContextNote,
        contextNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
