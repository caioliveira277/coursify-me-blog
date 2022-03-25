import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { HttpClient } from './HttpClient';

export interface IGetMedia {
  id: number;
  media_details: {
    sizes: {
      medium: {
        source_url: string;
      };
    };
  };
}

export class MediasAdapter extends HttpClient {
  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getMedias(
    featuredMediaId: number[],
  ): Promise<AxiosResponse<IGetMedia[]>> {
    return this.instance.get(`media/?include=${featuredMediaId.join(',')}`);
  }
}
