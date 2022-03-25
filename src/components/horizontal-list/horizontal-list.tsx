/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native';
import {
  boxShadow,
  Card,
  CardImage,
  CardLink,
  CardParagraph,
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
            uri: item.thumbnail,
          }}
          resizeMode="cover"
        />
        <CardContent>
          <CardTitle numberOfLines={2}>{item.title}</CardTitle>
          <CardParagraph numberOfLines={4}>
            {item.paragraph.replace(/(<([^>]+)>)/gi, '')}
          </CardParagraph>
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
      <ListContainer<any> data={items} renderItem={renderItem} horizontal />
    </Container>
  );
}
