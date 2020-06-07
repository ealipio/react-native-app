import React, { useEffect, useState, useContext, useRef } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

import { Button } from 'native-base';
// import { with } from 'react-navigation';
import { withNavigationFocus } from '@react-navigation/compat';


import Layout from '../components/Layout';
import NoteContent from '../components/NoteContent';
import NoteContext from '../context/noteContext';

const Home = (props) => {
  const prevProps = useRef(false);
  const { getContextNotes } = useContext(NoteContext);
  const [notes, setNotes] = useState();

  useEffect(() => {
    const getData = () => {
      if (prevProps.isFocused !== props.isFocused) {
        const notesResult = getContextNotes()
        setNotes(notesResult);
      }
    };
    getData();
  }, [getContextNotes, props.isFocused]);
  return (
    <Layout
      title="My Notes"
      footer={
        <Button full onPress={() => props.navigation.navigate('AddNote')}>
          <Text>Add Note</Text>
        </Button>
      }
    >
      <FlatList
        data={notes}
        keyExtractor={(note) => note.id}
        renderItem={(note) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Modify', {
                id: note.item.id,
              })
            }
          >
            <NoteContent note={{ ...note }} />
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
};

export default withNavigationFocus(Home);
