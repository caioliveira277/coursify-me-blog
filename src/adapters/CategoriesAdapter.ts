import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { IItem } from '../components/horizontal-list/types';
import { OrderType } from '../contexts/order';
import { HttpClient } from './HttpClient';

export interface IGetCategories {
  id: number;
  name: string;
  countViews: number;
}

export class CategoriesAdapter extends HttpClient {
  protected readonly categoriesPerPage = 4;

  public categoriesIds: number[] = [];

  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getCategories(): Promise<AxiosResponse<IGetCategories[]>> {
    return this.instance.get(
      `/categories?per_page=${this.categoriesPerPage}&exclude=732,5,1282&hide_empty=true`,
    );
  }

  public formatCategoriesForState(
    categories: IGetCategories[],
  ): IGetCategories[] {
    return categories.map(category => {
      this.categoriesIds.push(category.id);
      return {
        id: category.id,
        name: category.name,
        countViews: 0,
      };
    });
  }

  public assignPosts(
    categories: IGetCategories[],
    postsItems: IItem[],
  ): { [key: number]: IItem[] } {
    const assignedPosts: { [key: number]: IItem[] } = {};

    categories.forEach(category => {
      postsItems.forEach(post => {
        if (post.categories.includes(category.id)) {
          if (!assignedPosts[category.id]) {
            assignedPosts[category.id] = [post];
          } else {
            assignedPosts[category.id].push(post);
          }
        }
      });
    });
    return assignedPosts;
  }

  public assignViews(
    categories: IGetCategories[],
    viewsPerCategories: { [key: number]: number },
  ): IGetCategories[] {
    return categories.map(category => {
      return {
        id: category.id,
        name: category.name,
        countViews: viewsPerCategories[category.id],
      };
    });
  }

  public static sortList(
    categories: IGetCategories[],
    type: OrderType,
  ): IGetCategories[] {
    categories.sort((prev, next) => {
      let sorted: number;

      switch (type) {
        case 'asc':
          sorted = next.name.localeCompare(prev.name);
          break;
        case 'desc':
          sorted = prev.name.localeCompare(next.name);
          break;
        case 'more_view':
          sorted = prev.countViews - next.countViews;
          break;
        case 'less_view':
          sorted = next.countViews - prev.countViews;
          break;
        default:
          sorted = 0;
          break;
      }
      return sorted;
    });

    return categories;
  }
}
