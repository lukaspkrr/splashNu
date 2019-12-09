import React from 'react';

import {
  Container,
  HeaderContent,
  HeaderImage,
  HeaderText,
  HeaderIcon,
} from './styles';

import logo from './../../../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <HeaderImage source={logo} resizeMode="contain" />
        <HeaderText>Lucas</HeaderText>
      </HeaderContent>
      <HeaderIcon name="down" size={15} color="#fff" />
    </Container>
  );
}
