import React from 'react';

import QRCdode from 'react-native-qrcode-svg';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCdode
          value="https://google.com"
          size={80}
          color="#8b10ae"
          backgroundColor="#fff"
        />
      </Code>
    </Container>
  );
}
