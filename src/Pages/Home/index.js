import React from 'react';

import {Header, Menu, CardComponent, Tabs} from './Components';

import {Container, Content} from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        {/* <Menu /> */}
        <CardComponent />
      </Content>
      <Tabs />
    </Container>
  );
}
