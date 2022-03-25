import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme/default';

export const Container = styled.View`
  margin-bottom: 42px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;
export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  flex-wrap: wrap;
  flex: 1;
`;
export const LinkViewMore = styled.Text`
  color: ${props => props.theme.colors.gray_500};
  text-transform: uppercase;
`;

export const Card = styled.TouchableOpacity<{ lastItem: boolean }>`
  width: 235px;
  height: 325px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  margin-right: ${props => (props.lastItem ? '0px' : '38px')};
`;
export const CardImage = styled.Image`
  width: 235px;
  height: 103px;
`;
export const CardContent = styled.View`
  margin-top: 5px;
  padding: 10px;
`;
export const CardTitle = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const CardDescription = styled.Text`
  color: ${props => props.theme.colors.gray_400};
  font-size: 16px;
  margin: 16px 0px;
`;
export const CardLink = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
`;
export const boxShadow = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export const cardSkeleton = {
  containerStyle: StyleSheet.create({
    card: {
      overflow: 'hidden',
      shadowColor: '#000',
      height: 325,
      width: 235,
      backgroundColor: '#fff',
      borderRadius: 12,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 28,
      justifyContent: 'space-between',
    },
  }),
};

export const ContainerSkeleton = styled.View`
  margin-bottom: 42px;
`;

export const ListContainer = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingTop: 1,
    paddingBottom: 15,
    paddingLeft: 3,
    paddingRight: 3,
  },
}))``;
