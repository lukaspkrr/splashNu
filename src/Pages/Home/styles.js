import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(138, 5, 190);
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 30px 0px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderImage = styled.Image`
  width: 40px;
  height: 40px;
  margin: 5px;
`;

export const HeaderIcon = styled(Icon)``;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 25;
  font-weight: bold;
`;
