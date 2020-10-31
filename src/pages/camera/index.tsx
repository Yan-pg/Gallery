import React, {useCallback, useState} from 'react';
import {Alert, StatusBar, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImgPicker from 'react-native-image-picker';

import {
  Container,
  Content,
  ButtonTakePhoto,
  TextButtonTakePhoto,
  ToggleModal,
  ContentModal,
  ButtonClose,
  TextButtonClose,
  TakedImage,
  ChangeContainer,
  ChangeButton,
  ChangeButtonText,
} from './styles';

interface Options {
  title: string;
  chooseFromLibraryButtonTitle: string;
  noData: boolean;
  mediaType: 'photo' | 'video' | 'mixed' | undefined;
}

const Camera: React.FC = () => {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [open, setOpen] = useState(false);
  const [capturedPhoto, setCaputuredPhoto] = useState<string | null>(null);

  const TakePicture = useCallback(async (camera) => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);

    setCaputuredPhoto(data.uri);

    setOpen(true);

    console.log('Foto tirada com sucesso:' + data.uri);
  }, []);

  const toggleCam = useCallback(() => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  }, [setType, type]);

  const OpenAlbum = useCallback(() => {
    const options: Options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album ',
      noData: true,
      mediaType: 'photo',
    };

    ImgPicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Cancelado');
      } else if (response.error) {
        console.log('Gerou algum erro: ' + response.error);
      } else {
        setCaputuredPhoto(response.uri);

        setOpen(true);
      }
    });
  }, []);

  return (
    <Container>
      <StatusBar hidden={true} />

      <RNCamera
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissão para user a camera',
          message: 'Nós precisamos usar a sua camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return <View />;
          }

          return (
            <Content>
              <ButtonTakePhoto onPress={() => TakePicture(camera)}>
                <TextButtonTakePhoto>Tirar foto</TextButtonTakePhoto>
              </ButtonTakePhoto>

              <ButtonTakePhoto onPress={OpenAlbum}>
                <TextButtonTakePhoto>Album</TextButtonTakePhoto>
              </ButtonTakePhoto>
            </Content>
          );
        }}
      </RNCamera>

      <ChangeContainer>
        <ChangeButton onPress={toggleCam}>
          <ChangeButtonText>Trocar</ChangeButtonText>
        </ChangeButton>
      </ChangeContainer>

      {capturedPhoto && (
        <ToggleModal animationType="slide" transparent={false} visible={open}>
          <ContentModal>
            <ButtonClose onPress={() => setOpen(false)}>
              <TextButtonClose>Fechar</TextButtonClose>
            </ButtonClose>
            <TakedImage source={{uri: capturedPhoto}} />
          </ContentModal>
        </ToggleModal>
      )}
    </Container>
  );
};

export default Camera;
