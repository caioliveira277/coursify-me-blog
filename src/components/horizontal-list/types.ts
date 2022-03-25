import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IThumbnail = {
  id: number;
  sourceUri: string;
};

export type IItem = {
  id: number;
  title: string;
  description: string;
  thumbnail: IThumbnail;
  content: string;
  categories: number[];
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
