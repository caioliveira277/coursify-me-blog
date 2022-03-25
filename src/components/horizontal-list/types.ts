import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IItem = {
  id: number;
  title: string;
  paragraph: string;
  thumbnail: string;
  content: {
    rendered: string;
  };
};

export interface IRenderItem {
  item: IItem;
  index: number;
}

export interface IHorizontalList {
  title: string;
  items: IItem[];
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}
