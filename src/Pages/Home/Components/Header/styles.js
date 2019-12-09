import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const HeaderIcon = styled(Icon)``;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 25;
  font-weight: bold;
  margin-left: 8px;
`;
