/* eslint-disable @typescript-eslint/no-explicit-any */
import CardSkeleton from './card-skeleton';
import {
  boxShadow,
  Card,
  CardImage,
  CardLink,
  CardDescription,
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
  items = [],
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
            uri: item.thumbnail.sourceUri,
          }}
          resizeMode="cover"
        />
        <CardContent>
          <CardTitle numberOfLines={2}>{item.title}</CardTitle>
          <CardDescription numberOfLines={4}>
            {item.description.replace(/(<([^>]+)>)/gi, '')}
          </CardDescription>
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
      {items.length ? (
        <ListContainer<any> data={items} renderItem={renderItem} horizontal />
      ) : (
        <CardSkeleton />
      )}
    </Container>
  );
}
