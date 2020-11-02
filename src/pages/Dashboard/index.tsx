import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerIcon,
  ButtonIconCamera,
  ButtonIconNotification,
  Notification,
  AvatarImage,
  HeaderText,
  TextBio,
  ContentInfo,
  ContentFollowers,
  Followers,
  ViewDisplay,
  Quantity,
  ContainerInfos,
  ButtonContent,
  ButtonFollow,
  ButtoFollowText,
  ButtonUnFollow,
  ButtoUnFollowText,
  ContainerPhoto,
  ContentImg,
  Img,
  ButtonContentUnfollow,
  HeaderMain,
} from './styles';

const Dashboard: React.FC = () => {
  const [quantity, setQuantity] = useState(500);
  const [changeButtonToUnfollow, setChangeButtonToUnfollow] = useState(false);

  const {navigate} = useNavigation();

  const handleQuantityFollow = useCallback(() => {
    const more = quantity + 1;

    setChangeButtonToUnfollow(true);
    setQuantity(more);
  }, [quantity]);

  const handleQuantityUnfollow = useCallback(() => {
    const less = quantity - 1;

    setChangeButtonToUnfollow(false);
    setQuantity(less);
  }, [quantity]);

  const goToCamera = useCallback(() => {
    navigate('Camera');
  }, [navigate]);

  return (
    <ScrollView>
      <Container>
        <ContainerIcon>
          <ButtonIconCamera onPress={goToCamera}>
            <Icon name="camera" color="#212121" size={26} />
          </ButtonIconCamera>

          {changeButtonToUnfollow && <Notification />}

          <ButtonIconNotification>
            <Icon name="bell" size={24} color="#212121" />
          </ButtonIconNotification>
        </ContainerIcon>
        <HeaderMain>
          <HeaderText>Yan César</HeaderText>

          <ContainerInfos>
            <AvatarImage
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/65233281?s=460&u=a1ca2db09724eda3482163e5d27d89ebfec5f8fc&v=4',
              }}
            />
            <ContentInfo>
              <TextBio>Developer full stack</TextBio>

              <ContentFollowers>
                <ViewDisplay>
                  <Followers>{quantity}</Followers>
                  <Quantity>Followers</Quantity>
                </ViewDisplay>

                <ViewDisplay>
                  <Followers>15k</Followers>
                  <Quantity>Following</Quantity>
                </ViewDisplay>
              </ContentFollowers>
              <ButtonContent>
                <ButtonFollow onPress={handleQuantityFollow}>
                  <ButtoFollowText>Follow</ButtoFollowText>
                </ButtonFollow>
              </ButtonContent>

              {changeButtonToUnfollow && (
                <ButtonContentUnfollow>
                  <ButtonUnFollow onPress={handleQuantityUnfollow}>
                    <ButtoUnFollowText>Unfollow</ButtoUnFollowText>
                  </ButtonUnFollow>
                </ButtonContentUnfollow>
              )}
            </ContentInfo>
          </ContainerInfos>
        </HeaderMain>
        <ContainerPhoto>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />

            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>

          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
          <ContentImg>
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
            <Img
              source={{
                uri:
                  'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/12154708/A-natureza-uma-aliada-busca-liberdade-alma.jpg',
              }}
            />
          </ContentImg>
        </ContainerPhoto>
      </Container>
    </ScrollView>
  );
};

export default Dashboard;
