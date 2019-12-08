import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Card = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 2px;
  max-height: 350px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 40px 20px;
`;

export const HeaderIcon = styled(Icon)``;

export const HeaderText = styled.Text`
  color: #626262;
  margin-left: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  height: 100px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

export const FirstIcon = styled(Icon)``;

export const FooterText = styled.Text`
  color: #626262;
  font-size: 12px;
`;

export const LastIcon = styled(Icon)``;

export const IconContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

export const TextFatura = styled.Text`
  color: #00bbca;
  font-weight: bold;
`;

export const ValorFatura = styled.Text`
  flex-direction: row;
`;

export const TextSimbolo = styled.Text`
  color: #00bbca;
  font-size: 40px;
`;

export const TextInteiro = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #00bbca;
  font-size: 40px;
`;

export const TextDecimal = styled.Text`
  color: #00bbca;
  font-size: 40px;
`;

export const ContentDisponivel = styled.View`
  flex-direction: row;
`;

export const TextDisponivel = styled.Text``;

export const ValorDisponivel = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #a2d43a;
`;

export const Bars = styled.View`
  position: absolute;
  right: 0;
`;

export const BarFatura = styled.View`
  width: 10px;
  height: ${props => (props.size * 250) / 100};
  background-color: #00bbca;
  border-top-right-radius: 2px;
`;

export const BarDisponivel = styled.View`
  width: 10px;
  height: ${props => (props.size * 250) / 100};
  background-color: #a2d43a;
`;
