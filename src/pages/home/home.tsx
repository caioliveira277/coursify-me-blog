import { useEffect, useState } from 'react';
import { Footer, HorizontalList } from '../../components';
import { Container, SafeContainer } from './styles';
import {
  CategoriesAdapter,
  IGetCategories,
} from '../../adapters/CategoriesAdapter';
import { PostsAdapter } from '../../adapters/PostsAdapter';
import { IItem } from '../../components/horizontal-list/types';
import { MediasAdapter } from '../../adapters/MediasAdapter';
import { IHome } from './types';

export default function Home({ navigation }: IHome) {
  const [categories, setCategories] = useState<IGetCategories[]>(
    [] as IGetCategories[],
  );
  const [items, setItems] = useState<{ [key: number]: IItem[] }>(
    {} as { [key: number]: IItem[] },
  );

  useEffect(() => {
    const categoriesAdapter = new CategoriesAdapter();
    categoriesAdapter.getCategories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    const postsAdapter = new PostsAdapter();
    const mediasAdapter = new MediasAdapter();

    categories.forEach(category => {
      postsAdapter.getPosts(category.id).then(({ data: dataPost }) => {
        mediasAdapter
          .getMedias(dataPost.map(post => post.featured_media))
          .then(({ data: dataMedia }) => {
            const formattedItems = PostsAdapter.formatPostsForItems(
              dataPost,
              dataMedia,
            );
            setItems(prevState => ({
              ...prevState,
              [category.id]: formattedItems,
            }));
          });
      });
    });
  }, [categories]);

  return (
    <SafeContainer>
      <Container>
        {categories.map(category => (
          <HorizontalList
            key={category.id}
            title={category.name}
            items={items[category.id]}
            navigation={navigation}
          />
        ))}
      </Container>
      <Footer />
    </SafeContainer>
  );
}
