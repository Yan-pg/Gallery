import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImgPicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Content,
  ButtonBack,
  ButtonTakePhoto,
  ButtonGetGallery,
  ToggleModal,
  ButtonClose,
  ButtonSave,
  ButtonSaveText,
  TakedImage,
  ChangeButton,
  FlashButton,
} from './styles';

interface Options {
  title: string;
  chooseFromLibraryButtonTitle: string;
  noData: boolean;
  mediaType: 'photo' | 'video' | 'mixed' | undefined;
}

const Camera: React.FC = () => {
  const {navigate} = useNavigation();

  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [typeFlash, setTypeFlash] = useState(RNCamera.Constants.FlashMode.off);
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
  }, [type]);

  const handleChangeFlash = useCallback(() => {
    setTypeFlash(
      typeFlash === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.on
        : RNCamera.Constants.FlashMode.off,
    );
  }, [typeFlash]);

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

  const handleToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <Container>
      <StatusBar hidden={true} />

      <RNCamera
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        type={type}
        flashMode={typeFlash}
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
              <ButtonTakePhoto onPress={() => TakePicture(camera)} />
            </Content>
          );
        }}
      </RNCamera>

      <ButtonBack onPress={handleToDashboard}>
        <Icon name="arrow-left" size={34} color="#ECEFF1" />
      </ButtonBack>

      <FlashButton onPress={handleChangeFlash}>
        {typeFlash === RNCamera.Constants.FlashMode.off && (
          <Icons name="md-flash-off" size={34} color="#ECEFF1" />
        )}
        {typeFlash === RNCamera.Constants.FlashMode.on && (
          <Icons name="md-flash" size={34} color="#ECEFF1" />
        )}
      </FlashButton>

      <ButtonGetGallery onPress={OpenAlbum}>
        <Icon name="image" size={34} color="#ECEFF1" />
      </ButtonGetGallery>

      <ChangeButton onPress={toggleCam}>
        <Icons name="camera-reverse" size={34} color="#ECEFF1" />
      </ChangeButton>

      {capturedPhoto && (
        <ToggleModal animationType="slide" transparent={false} visible={open}>
          <TakedImage source={{uri: capturedPhoto}} />

          <ButtonClose onPress={() => setOpen(false)}>
            <Icon name="x" size={34} color="#ECEFF1" />
          </ButtonClose>

          <ButtonSave onPress={() => {}}>
            <ButtonSaveText>Save</ButtonSaveText>
            <Icon name="arrow-right" size={24} color="#263238" />
          </ButtonSave>
        </ToggleModal>
      )}
    </Container>
  );
};

export default Camera;
