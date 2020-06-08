import React from 'react';

import { Card, CardItem, Body, H3 } from 'native-base';
import { Text } from 'react-native';

const NoteCard = ({ note }) => {
  const wrappedContent = ({ note }) =>
    note.item.content.length > 120
      ? `${note.item.content.substr(0, 120)}...`
      : note.item.content;

  return (
    <Card>
      <CardItem>
        <Body>
          <H3>{note.item.title}</H3>
          <Text>{wrappedContent({ note })}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default NoteCard;
