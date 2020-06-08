import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

import { Button, Textarea, Form, Item, Input, Label } from 'native-base';

import Layout from '../components/Layout';
import { NoteContext } from '../context/noteContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    color: '#fff',
  },
});

const Modify = ({ navigation, route }) => {
  const initialNote = { title: '', content: '', id: '' };
  const [note, setNote] = useState(initialNote);
  const { contextNotes, updateContextNote, deleteContextNote } = useContext(
    NoteContext
  );

  useEffect(() => {
    let noteIndex = contextNotes.findIndex(
      (item) => item.id === route.params.id
    );
    if (noteIndex > -1) {
      setNote({
        title: contextNotes[noteIndex].title,
        content: contextNotes[noteIndex].content,
      });
    }
  }, [contextNotes, route.params.id]);

  const updateNote = () => {
    updateContextNote(note, route.params.id);
    navigation.navigate('Home');
  };

  const deleteNote = () => {
    deleteContextNote(route.params.id);
    navigation.navigate('Home');
  };
  return (
    <Layout
      title="Modify Note"
      footer={
        <Fragment>
          <Button full onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btn}>Cancel</Text>
          </Button>
          <Button full onPress={updateNote}>
            <Text style={styles.btn}>Update Note</Text>
          </Button>
          <Button full onPress={deleteNote}>
            <Text style={styles.btn}>Delete Note</Text>
          </Button>
        </Fragment>
      }
    >
      <Form style={styles.container}>
        <Item>
          <Label>Title:</Label>
          <Input
            value={note.title}
            onChangeText={(title) => setNote({ title, content: note.content })}
          />
        </Item>
        <Textarea
          style={styles.container}
          value={note.content}
          onChangeText={(content) =>
            setNote({
              title: note.title,
              content,
            })
          }
          placeholder="Here the content of you new note."
        />
      </Form>
    </Layout>
  );
};

export default Modify;
