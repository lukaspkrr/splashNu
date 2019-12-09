import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #8b10ae;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SplashText = styled.Text`
  position: absolute;
  opacity: 1;
  color: #fff;
  font-size: 25;
  font-weight: bold;
`;

export const Block = styled.Text`
  position: absolute;
  height: 40;
  width: 150;
  left: -110;
  background-color: #8b10ae;
`;
