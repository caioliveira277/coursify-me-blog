export type IItem = {
  id: number;
  title: string;
  paragraph: string;
};

export interface IRenderItem {
  item: IItem;
  index: number;
}

export interface IHorizontalList {
  title: string;
  items: IItem[];
}
