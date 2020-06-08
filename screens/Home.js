import React, { useEffect, useState, useContext } from 'react';

import { Text, FlatList, TouchableOpacity } from 'react-native';

import { Button } from 'native-base';
import { useIsFocused } from '@react-navigation/native';

import Layout from '../components/Layout';
import NoteCard from '../components/NoteCard';

//import useFont from '../hooks/useFont';
import { NoteContext } from '../context/noteContext';

const Home = ({ navigation }) => {
  const { getContextNotes } = useContext(NoteContext);
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isFocused = useIsFocused();

  //useFont();

  useEffect(() => {
    const fetchData = async () => {
      const notes = await getContextNotes();
      setNotes(notes);
      console.log(notes);
    };

    if (isFocused && loaded == false) {
      fetchData();
      setLoaded(true);
    }

    if (isFocused === false) {
      setLoaded(false);
    }
  }, [getContextNotes, isFocused]);

  return (
    <Layout
      title="My Notes"
      footer={
        <Button full onPress={() => navigation.navigate('AddNote')}>
          <Text style={{color: '#FFF'}}>Add Note</Text>
        </Button>
      }
    >
      <FlatList
        data={notes}
        keyExtractor={(note) => note.id}
        renderItem={(note) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Modify', { id: note.item.id });
            }}
          >
            <NoteCard note={{ ...note }} />
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
};

export default Home;
