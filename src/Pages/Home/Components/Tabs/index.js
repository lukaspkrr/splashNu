import React from 'react';

import {Container, TabsContainer, MiniCard, CardIcon, CardText} from './styles';

export default function Tabs() {
  const list = [
    {
      icon: 'adduser',
      text: 'Indicar amigos',
    },
    {
      icon: 'barcode',
      text: 'Pagar',
    },
    {
      icon: 'questioncircleo',
      text: 'Me ajuda',
    },
    {
      icon: 'upcircleo',
      text: 'Transferir',
    },
    {
      icon: 'downcircleo',
      text: 'Depositar',
    },
    {
      icon: 'tablet1',
      text: 'Recarga de celular',
    },
  ];
  return (
    <Container>
      <TabsContainer>
        {list.map((item, i) => (
          <MiniCard onPress={() => {}} key={i}>
            <CardIcon name={item.icon} size={24} color="#fff" />
            <CardText>{item.text}</CardText>
          </MiniCard>
        ))}
      </TabsContainer>
    </Container>
  );
}
