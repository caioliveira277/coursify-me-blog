import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import LogoImage from 'assets/logo-large-white.png';
import {
  ButtonCallAction,
  Container,
  Description,
  LogoWhite,
  ButtonCallActionText,
} from './styles';

export default function Footer() {
  const handlePress = () =>
    Linking.openURL(Constants.manifest?.extra?.SITE_URL);

  return (
    <Container>
      <LogoWhite source={LogoImage} />
      <Description>
        O Coursify.me é uma plataforma de ensino a distância, onde qualquer
        pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
      </Description>
      <ButtonCallAction onPress={handlePress}>
        <ButtonCallActionText>
          Quero conhecer a plataforma!
        </ButtonCallActionText>
      </ButtonCallAction>
    </Container>
  );
}
