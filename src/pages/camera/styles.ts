import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  margin-bottom: 35px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ButtonTakePhoto = styled.TouchableOpacity`
  background-color: #fff;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  padding: 15px;
  align-self: center;
  margin: 20px;
`;

export const TextButtonTakePhoto = styled.Text``;

export const ChangeContainer = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  height: 40px;
  position: absolute;
  right: 25px;
  top: 60px;
`;

export const ChangeButton = styled.TouchableOpacity``;

export const ChangeButtonText = styled.Text``;

export const ToggleModal = styled.Modal``;

export const ContentModal = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  margin: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  margin: 10px;
`;

export const TextButtonClose = styled.Text``;

export const TakedImage = styled.Image`
  width: 350px;
  height: 450px;
  border-radius: 15px;
`;
