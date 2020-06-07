import React from 'react';

import {
  Container,
  Header,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Title,
} from 'native-base';

const Layout = (props) => {
  return (
    <Container>
      <Header>
        <Left>{props.left}</Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right>{props.right}</Right>
      </Header>
      {props.children}
      <Footer>
        <FooterTab>{props.footer}</FooterTab>
      </Footer>
    </Container>
  );
};

export default Layout;
