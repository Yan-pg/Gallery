import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  margin-bottom: 35px;
`;

export const ButtonTakePhoto = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  padding: 15px;
  align-self: center;
  margin: 20px;
`;

export const ButtonGetGallery = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
  right: 10px;
  margin-right: 10px;
`;

export const TextButtonTakePhoto = styled.Text``;

export const ChangeButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
  left: 10px;
  margin-left: 10px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 10px;
  margin-left: 10px;
`;

export const FlashButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  right: 10px;
  margin-right: 10px;
`;

export const ToggleModal = styled.Modal``;

export const ContentModal = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  margin: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 10px;
`;

export const TakedImage = styled.Image`
  flex: 1;
  width: auto;
`;

export const ButtonSave = styled(RectButton)`
  flex-direction: row;
  width: 90px;
  height: 40px;
  background: #eceff1;
  border-radius: 10px;
  position: absolute;
  bottom: 60px;
  right: 10px;
  align-items: center;
`;

export const ButtonSaveText = styled.Text`
  color: #263238;
  font-family: 'Roboto-Bold';
  padding-left: 15px;
`;
