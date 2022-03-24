import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme/default';

export const Container = styled.SafeAreaView`
  height: 54px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;

export const boxShadow = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export const ButtonMenu = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 70px;
  background-color: ${props => props.theme.colors.primary};
  padding: 6px;
  align-items: center;
  justify-content: center;
`;
export const Bar = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  margin: 2px;
`;

export const Logo = styled.Image`
  width: 169px;
  height: 62px;
`;
