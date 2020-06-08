import React, { createContext, useState, useEffect } from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const errorHandler = (e) => {
  Alert.alert('Notes Error', `Sorry about the issue: ${e}`, [{ text: 'ok' }], {
    cancelable: false,
  });
};

export const NoteContext = createContext();

const NoteProvider = (props) => {
  const [contextNotes, setContextNotes] = useState();

  useEffect(() => {
    const syncData = async () => await storeData();
    if (contextNotes) {
      syncData();
    }
  }, [contextNotes]);

  const getContextNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('@notes');
      if (storedNotes) {
        const storedNotesParsed = [...JSON.parse(storedNotes)];
        setContextNotes(storedNotesParsed);
        return storedNotesParsed;
      }
      return contextNotes;
    } catch (e) {
      errorHandler(e);
    }
  };
  const addContextNote = async (note) => {
    const notes = contextNotes || [];
    setContextNotes([...notes, note]);
  };
  const updateContextNote = async (note, id) => {
    // remove
    const newContextNotes = contextNotes.filter((note) => note.id !== id);
    // add new note
    const newNotes = [...newContextNotes, { ...note, id }];
    setContextNotes(newNotes);
  };
  const deleteContextNote = async (id) => {
    setContextNotes(contextNotes.filter((ctx) => ctx.id !== id));
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
