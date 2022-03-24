import { useEffect, useState } from 'react';
import { HorizontalList } from '../../components';
import { Container } from './styles';
import {
  CategoriesAdapter,
  IGetCategories,
} from '../../adapters/CategoriesAdapter';

export default function Home() {
  const [categories, setCategories] = useState<IGetCategories[]>(
    [] as IGetCategories[],
  );

  useEffect(() => {
    const categoriesAdapter = new CategoriesAdapter();
    categoriesAdapter.getCategories().then(({ data }) => {
      setCategories(data);
    });
  }, []);
  return (
    <Container>
      {categories.map(category => (
        <HorizontalList
          key={category.id}
          title={category.name}
          items={[{ id: 1, paragraph: '23', title: 'fds' }]}
        />
      ))}
    </Container>
  );
}
