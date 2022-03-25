import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { OrderType } from '../contexts/order';
import { HttpClient } from './HttpClient';

export interface IGetCategories {
  id: number;
  name: string;
}

export class CategoriesAdapter extends HttpClient {
  public categoriesPerPage = 9;

  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getCategories(): Promise<AxiosResponse<IGetCategories[]>> {
    return this.instance.get(
      `/categories?per_page=${this.categoriesPerPage}&exclude=732,5,1282`,
    );
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
        default:
          sorted = 0;
          break;
      }
      return sorted;
    });

    return categories;
  }
}
