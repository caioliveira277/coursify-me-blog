import styled from 'styled-components/native';
import { theme } from '../../theme/default';

export const ScrollContainer = styled.ScrollView`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 46px 26px 32px 26px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: 26px;
`;

export const webView = {
  tagsStyles: {
    a: {
      color: theme.colors.gray_500,
    },
  },
  baseStyle: {
    fontSize: 18,
    color: theme.colors.gray_500,
  },
};
