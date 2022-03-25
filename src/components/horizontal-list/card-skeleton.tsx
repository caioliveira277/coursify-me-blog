import SkeletonContent from 'react-native-skeleton-content';
import { cardSkeleton } from './styles';

export default function CardSkeleton() {
  return (
    <SkeletonContent
      containerStyle={cardSkeleton.containerStyle.card}
      animationDirection="horizontalRight"
      layout={[
        { width: 235, height: 103, marginBottom: 16 },
        {
          width: 220,
          height: 20,
          marginBottom: 30,
          alignSelf: 'center',
        },
        {
          width: 220,
          height: 10,
          marginBottom: 10,
          alignSelf: 'center',
        },
        {
          width: 220,
          height: 10,
          marginBottom: 10,
          alignSelf: 'center',
        },
        {
          width: 220,
          height: 10,
          marginBottom: 10,
          alignSelf: 'center',
        },
        {
          width: 220,
          height: 10,
          marginBottom: 10,
          alignSelf: 'center',
        },
        {
          width: 220,
          height: 10,
          marginBottom: 25,
          alignSelf: 'center',
        },
        { width: 50, height: 10, marginLeft: 8 },
      ]}
      isLoading
    />
  );
}
