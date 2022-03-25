import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  padding: 46px 26px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

export const webView = StyleSheet.create({
  container: {
    flex: 1,
  },
});
