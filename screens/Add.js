import React, { Fragment, useState, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { Button, Textarea, Form, Item, Input, Label } from 'native-base';

import Layout from '../components/Layout';
import { NoteContext } from '../context/noteContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Add = (props) => {
  const [newNote, setNewNote] = useState({ title: '', content: '', id: '' });
  const { addContextNote } = useContext(NoteContext);

  const saveNote = (e) => {
    addContextNote(newNote);
    props.navigation.navigate('Home');
  };
  const generateId = () => new Date().getMilliseconds().toString();
  return (
    <Layout
      title="Add Note"
      footer={
        <Fragment>
          <Button full onPress={() => props.navigation.navigate('Home')}>
            <Text>Cancel</Text>
          </Button>
          <Button full onPress={saveNote}>
            <Text>Save Note</Text>
          </Button>
        </Fragment>
      }
    >
      <Form style={styles.container}>
        <Item>
          <Label>Title:</Label>
          <Input
            value={newNote.title}
            onChangeText={(title) => {
              setNewNote({ ...newNote, title })
            }}
          />
        </Item>
        <Textarea
          style={styles.container}
          value={newNote.content}
          onChangeText={(content) =>
            setNewNote({
              title: newNote.title,
              content,
              id: generateId(),
            })
          }
          placeholder="Here the content of you new note."
        />
      </Form>
    </Layout>
  );
};

export default Add;
