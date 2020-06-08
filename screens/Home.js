import React, { useEffect, useState, useContext, useRef } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

import { Button } from 'native-base';

import Layout from '../components/Layout';
import NoteCard from '../components/NoteCard';
import { NoteContext } from '../context/noteContext';

import useFont from '../hooks/useFont';

const Home = ({navigation}) => {
  const prevProps = useRef(false);
  const { getContextNotes } = useContext(NoteContext);
  const [notes, setNotes] = useState([]);
  useFont();
  useEffect(() => {
    const getData = () => {
      setNotes(getContextNotes());
    };
    getData();
  }, [getContextNotes]);
  return (
    <Layout
      title="My Notes"
      footer={
        <Button full onPress={() => navigation.navigate('AddNote')}>
          <Text>Add Note</Text>
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
