import { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { IItem, IThumbnail } from '../components/horizontal-list/types';
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
  protected readonly categoriesPerPage = 20;

  public constructor() {
    super(Constants.manifest?.extra?.BASE_API_URL);
  }

  public async getMedias(
    featuredMediaIds: number[],
  ): Promise<AxiosResponse<IGetMedia[]>> {
    return this.instance.get(
      `media/?per_page=${
        this.categoriesPerPage
      }&include=${featuredMediaIds.join(',')}`,
    );
  }

  public formatMediasForState(medias: IGetMedia[]): IThumbnail[] {
    return medias.map(media => {
      return {
        id: media.id,
        sourceUri: media.media_details.sizes.medium.source_url,
      };
    });
  }

  public assignMedias(thumbnails: IThumbnail[], postsItems: IItem[]): IItem[] {
    return postsItems.map(post => ({
      ...post,
      thumbnail: {
        ...post.thumbnail,
        sourceUri:
          thumbnails.find(thumb => thumb.id === post.thumbnail.id)?.sourceUri ||
          '',
      },
    }));
  }
}
