import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 60px;
  margin-left: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 35px;
  margin-bottom: 35px;
`;

export const ButtonCan = styled.TouchableOpacity``;

export const ButtonText = styled.Text``;

export const ContainerPhoto = styled(Animated.View)`
  flex: 1;
  padding: 10px;
  background: #fef9f0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const ContentImg = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 10px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Img = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 20px;
`;
