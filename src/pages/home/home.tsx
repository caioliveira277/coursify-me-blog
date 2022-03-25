import { useContext, useEffect, useState } from 'react';
import {
  Footer,
  HorizontalList,
  HorizontalListSkeleton,
  Order,
} from '../../components';
import { Container, ScrollContainer } from './styles';
import {
  PostsAdapter,
  MediasAdapter,
  CategoriesAdapter,
  IGetCategories,
} from '../../adapters';
import { IItem } from '../../components/horizontal-list/types';
import { IHome } from './types';
import { OrderContext } from '../../contexts/order';

const categoriesAdapter = new CategoriesAdapter();
const postsAdapter = new PostsAdapter();
const mediasAdapter = new MediasAdapter();

export default function Home({ navigation }: IHome) {
  const { orderState } = useContext(OrderContext);
  const [categories, setCategories] = useState<IGetCategories[]>(
    [] as IGetCategories[],
  );
  const [posts, setPosts] = useState<{ [key: number]: IItem[] }>(
    {} as { [key: number]: IItem[] },
  );

  useEffect(() => {
    categoriesAdapter.getCategories().then(({ data: dataCategories }) => {
      setCategories(categoriesAdapter.formatCategoriesForState(dataCategories));
      postsAdapter
        .getPosts(categoriesAdapter.categoriesIds)
        .then(({ data: dataPosts }) => {
          const formattedPosts = postsAdapter.formatPostsForState(dataPosts);
          mediasAdapter
            .getMedias(postsAdapter.featuredMediaIds)
            .then(({ data: dataMedias }) => {
              const thumbnails = mediasAdapter.formatMediasForState(dataMedias);

              const assignedMedias = mediasAdapter.assignMedias(
                thumbnails,
                formattedPosts,
              );
              const assignedPosts = categoriesAdapter.assignPosts(
                dataCategories,
                assignedMedias,
              );

              const assignedViews = categoriesAdapter.assignViews(
                dataCategories,
                postsAdapter.viewsPerCategories,
              );
              setPosts(assignedPosts);
              setCategories(assignedViews);
            });
        });
    });
  }, []);

  useEffect(() => {
    setCategories(CategoriesAdapter.sortList(categories, orderState));
  }, [categories, orderState]);

  return (
    <ScrollContainer>
      <Container>
        <Order />
        {categories.length ? (
          categories.map(category => (
            <HorizontalList
              key={category.id}
              title={category.name}
              items={posts[category.id]}
              navigation={navigation}
            />
          ))
        ) : (
          <HorizontalListSkeleton />
        )}
      </Container>
      <Footer />
    </ScrollContainer>
  );
}
