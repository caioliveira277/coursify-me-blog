/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TouchableOpacity } from 'react-native';
import {
  boxShadow,
  Card,
  CardImage,
  CardLink,
  CardParagrath,
  CardTitle,
  ListContainer,
  Container,
  Title,
  LinkViewMore,
  Header,
  CardContent,
} from './styles';
import { IHorizontalList, IRenderItem } from './types';

export default function HorizontalList({ title, items }: IHorizontalList) {
  const renderItem = ({ item, index }: IRenderItem) => {
    return (
      <Card style={boxShadow.shadow} lastItem={items.length === index + 1}>
        <CardImage
          source={{
            uri: 'https://blog.coursify.me/wp-content/uploads/2019/07/sell-on-social-networks-cover-coursfiyme.jpg',
          }}
        />
        <CardContent>
          <CardTitle>{item.title}</CardTitle>
          <CardParagrath>{item.paragraph}</CardParagrath>
          <TouchableOpacity>
            <CardLink>Leia mais</CardLink>
          </TouchableOpacity>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <LinkViewMore>Ver Mais ►</LinkViewMore>
      </Header>
      <ListContainer<any> data={items} renderItem={renderItem} horizontal>
        <Text>Teste</Text>
      </ListContainer>
    </Container>
  );
}
