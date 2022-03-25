import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 46px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 18px;
  color: ${props => props.theme.colors.gray_600};
`;

export const picker = StyleSheet.create({
  border: {
    borderColor: '#E1E1E1',
  },
  container: {
    width: 124,
  },
});

export const PickerContainer = styled.View`
  width: 120px;
  height: 46px;
  border-width: 1px;
  overflow: hidden;
  border-radius: 10px;
  justify-content: center;
`;
