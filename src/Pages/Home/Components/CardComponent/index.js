import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  Card,
  Header,
  HeaderIcon,
  HeaderText,
  Footer,
  FirstIcon,
  FooterText,
  LastIcon,
  IconContent,
  TextContent,
  CardContent,
  TextFatura,
  ValorFatura,
  ContentDisponivel,
  TextDisponivel,
  ValorDisponivel,
  TextSimbolo,
  TextInteiro,
  TextDecimal,
  Bars,
  BarFatura,
  BarDisponivel,
  Indicator,
  Circle,
} from './styles';

export default function CardComponent() {
  function renderCard() {
    return (
      <Card>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <Header>
            <HeaderIcon name="creditcard" size={24} color="#626262" />
            <HeaderText>Cartão de crédito</HeaderText>
          </Header>
          <CardContent>
            <TextFatura>FATURA ATUAL</TextFatura>
            <ValorFatura>
              <TextSimbolo>{'R$  '}</TextSimbolo>
              <TextInteiro>00</TextInteiro>
              <TextDecimal>,00</TextDecimal>
            </ValorFatura>
            <ContentDisponivel>
              <TextDisponivel>Limite disponível</TextDisponivel>
              <ValorDisponivel>R$ 000,00</ValorDisponivel>
            </ContentDisponivel>
          </CardContent>
          <Bars>
            <BarFatura size={30} />
            <BarDisponivel size={70} />
          </Bars>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Footer>
            <IconContent>
              <FirstIcon name="car" size={24} color="#626262" />
            </IconContent>
            <TextContent>
              <FooterText>
                Compra mais recente em Nome da Loja no valor de R$ 000,00 dia
              </FooterText>
            </TextContent>
            <IconContent>
              <LastIcon name="right" size={15} color="#626262" />
            </IconContent>
          </Footer>
        </TouchableOpacity>
      </Card>
    );
  }
  return (
    <>
      <Container horizontal>{renderCard()}</Container>
      <Indicator>
        <Circle active />
        <Circle />
        <Circle />
      </Indicator>
    </>
  );
}
