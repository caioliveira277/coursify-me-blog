import { HorizontalList } from '../../components';
import { Container } from './styles';

const DATA = [
  {
    id: 1,
    title: 'any_title',
    paragraph: 'any_text',
  },
  {
    id: 2,
    title: 'any_title',
    paragraph: 'any_text',
  },
  {
    id: 3,
    title: 'any_title',
    paragraph: 'any_text',
  },
  {
    id: 4,
    title: 'any_title',
    paragraph: 'any_text',
  },
  {
    id: 5,
    title: 'any_title',
    paragraph: 'any_text',
  },
];

export default function Home() {
  return (
    <Container>
      <HorizontalList title="Cursos online" items={DATA} />
      <HorizontalList title="Marketing Digital" items={DATA} />
    </Container>
  );
}
