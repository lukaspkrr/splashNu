import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const MiniCard = styled.TouchableOpacity`
  justify-content: space-between;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 100px;
  width: 100px;
  margin-left: 10px;
`;

export const CardIcon = styled(Icon)``;

export const CardText = styled.Text`
  color: #fff;
  font-size: 13px;
`;
