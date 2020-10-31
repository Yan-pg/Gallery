import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderText,
  ContainerPhoto,
  ContentImg,
  Img,
  ButtonCan,
  ButtonText,
} from './styles';

const Dashboard: React.FC = () => {
  const {navigate} = useNavigation();

  const goToCamera = useCallback(() => {
    navigate('Camera');
  }, [navigate]);

  return (
    <ScrollView>
      <Container>
        <Header />
        <HeaderMain>
          <HeaderText>Hi, Yan César</HeaderText>
          <ButtonCan onPress={goToCamera}>
            <ButtonText>Camera</ButtonText>
          </ButtonCan>
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
