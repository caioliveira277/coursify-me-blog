import LogoImage from 'assets/logo-large.png';
import { Container, boxShadow, ButtonMenu, Bar, Logo } from './styles';

export default function Navbar() {
  return (
    <Container style={boxShadow.shadow}>
      <Logo source={LogoImage} resizeMode="contain" />
      <ButtonMenu>
        <Bar />
        <Bar />
        <Bar />
      </ButtonMenu>
    </Container>
  );
}
