import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const Notification = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #ff7043;
  position: absolute;
  right: 30px;
  top: 20px;
`;

export const ButtonIconCamera = styled.TouchableOpacity``;
export const ButtonIconNotification = styled.TouchableOpacity``;

export const HeaderMain = styled.View`
  margin-top: 20px;
  margin-left: 30px;
  margin: 0 50px;
`;

export const HeaderText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 35px;
  margin-bottom: 35px;
  color: #263238;
`;

export const ContainerInfos = styled.View`
  flex-direction: row;
`;

export const AvatarImage = styled.Image`
  width: 100px;
  height: 130px;
  border-radius: 15px;
`;

export const ContentInfo = styled.View`
  flex: 1;
  margin-left: 40px;
`;

export const ContentFollowers = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextBio = styled.Text`
  font-family: 'Roboto-Medium';
  color: #263238;
`;

export const Followers = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: #263238;
`;

export const Quantity = styled.Text``;

export const ButtonContent = styled.View`
  margin-top: 20px;
`;

export const ButtonContentUnfollow = styled.View`
  position: absolute;
  top: 90px;
`;

export const ButtonFollow = styled.TouchableOpacity`
  width: 100px;
  height: 25px;
  background: #263238;
  border-radius: 10px;
`;

export const ButtoFollowText = styled.Text`
  justify-content: center;
  font-family: 'Roboto-Bold';
  margin-left: 30px;
  color: #fff;
`;

export const ButtonUnFollow = styled.TouchableOpacity`
  width: 100px;
  height: 27px;
  background: #f5f5f5;
  border: 1px;
  border-radius: 10px;
`;

export const ButtoUnFollowText = styled.Text`
  justify-content: center;
  font-family: 'Roboto-Bold';
  margin-left: 20px;
  color: #263238;
`;

export const ViewDisplay = styled.View``;

export const ButtonText = styled.Text``;

export const ContainerPhoto = styled.View`
  flex: 1;
  margin-top: 20px;
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
  width: 150px;
  height: 200px;
  border-radius: 20px;
`;

export const ButtonCan = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #263238;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 40px;
  bottom: 30px;
`;
