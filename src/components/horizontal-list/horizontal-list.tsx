/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function HorizontalList({
  title,
  items,
  navigation,
}: IHorizontalList) {
  const renderItem = ({ item, index }: IRenderItem) => {
    return (
      <Card
        style={boxShadow.shadow}
        lastItem={items.length === index + 1}
        onPress={() => {
          navigation.navigate('Article', item);
        }}
      >
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
          <CardLink>Leia mais</CardLink>
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
