import React from 'react';
import {StatusBar} from 'react-native';

import {CardComponent} from './Components';

import {
  Container,
  Content,
  Header,
  HeaderContent,
  HeaderImage,
  HeaderIcon,
  HeaderText,
} from './styles';

import logo from './../../assets/images/logo.png';

export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="rgb(138, 5, 190)" />
      <Content>
        <Header>
          <HeaderContent>
            <HeaderImage source={logo} resizeMode="contain" />
            <HeaderText>Lucas</HeaderText>
          </HeaderContent>
          <HeaderIcon name="down" size={15} color="#fff" />
        </Header>
        <CardComponent />
      </Content>
    </Container>
  );
}
