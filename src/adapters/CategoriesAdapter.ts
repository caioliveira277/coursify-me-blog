import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
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
}
