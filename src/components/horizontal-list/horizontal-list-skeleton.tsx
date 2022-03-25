import SkeletonContent from 'react-native-skeleton-content';
import CardSkeleton from './card-skeleton';
import { cardSkeleton, Container, ContainerSkeleton } from './styles';

export default function HorizontalListSkeleton() {
  return (
    <Container>
      {[1, 2].map(index => (
        <ContainerSkeleton key={index}>
          <SkeletonContent
            containerStyle={cardSkeleton.containerStyle.header}
            animationDirection="horizontalRight"
            layout={[
              { width: 220, height: 20 },
              { width: 50, height: 15 },
            ]}
            isLoading
          />
          <CardSkeleton />
        </ContainerSkeleton>
      ))}
    </Container>
  );
}
