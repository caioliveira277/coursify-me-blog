import { IItem } from '../components/horizontal-list/types';

declare module '*.png';

declare global {
  type RootStackParamList = {
    Home: undefined;
    Article: IItem;
  };
}
