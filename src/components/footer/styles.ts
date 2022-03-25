import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  padding: 32px 0px;
`;

export const LogoWhite = styled.Image`
  width: 172px;
  height: 45px;
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  max-width: 340px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

export const ButtonCallAction = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 60px;
  justify-content: center;
  padding: 15px 36px;
  align-items: center;
`;

export const ButtonCallActionText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
`;
